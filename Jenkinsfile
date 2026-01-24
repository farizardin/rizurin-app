pipeline {
  agent any

  environment {
    NODE_ENV = 'production'

    APP_NAME   = 'rizurin-app'
    IMAGE_NAME = 'rizurin/rizurin-app'
    IMAGE_TAG  = "${BUILD_NUMBER}"

    DOCKER_REGISTRY        = 'harbor.rizurin.my.id'
    IMAGE_FULL             = "${DOCKER_REGISTRY}/${IMAGE_NAME}"
    DOCKER_CREDENTIALS_ID  = 'harbor-cred'
    KUBECONFIG_CRED        = 'k3s-kubeconfig'
    NAMESPACE              = 'default'
  }

  stages {

    stage('Install & Test & Build React') {
      agent {
        docker {
          image 'node:18-alpine'
          args '-u root'
        }
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
        sh 'CI=true npm test -- --watchAll=false'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh """
          docker build \
            -t ${IMAGE_FULL}:${IMAGE_TAG} \
            -t ${IMAGE_FULL}:latest .
        """
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: DOCKER_CREDENTIALS_ID,
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh """
            echo "$DOCKER_PASS" | docker login ${DOCKER_REGISTRY} -u "$DOCKER_USER" --password-stdin
            docker push ${IMAGE_FULL}:${IMAGE_TAG}
            docker push ${IMAGE_FULL}:latest
          """
        }
      }
    }

    stage('Deploy to k3s') {
      when {
        branch 'master'
      }
      steps {
        withCredentials([file(credentialsId: KUBECONFIG_CRED, variable: 'KUBECONFIG')]) {
          sh """
            kubectl apply -f k8s/ -n ${NAMESPACE}
            kubectl set image deployment/${APP_NAME} \
              ${APP_NAME}=${IMAGE_FULL}:${IMAGE_TAG} -n ${NAMESPACE}
            kubectl rollout status deployment/${APP_NAME} -n ${NAMESPACE}
          """
        }
      }
    }
  }

  post {
    success {
      echo 'SUCCESS: image deployed to k3s'
    }
    failure {
      echo 'FAILED: check the logs above for details'
    }
    always {
      cleanWs()
    }
  }
}
