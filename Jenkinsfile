pipeline {
  agent any

  environment {
    NODE_ENV = 'production'

    APP_NAME   = 'rizurin-app'
    IMAGE_NAME = 'farizardin/rizurin-app'
    IMAGE_TAG  = "${BUILD_NUMBER}"

    DOCKER_REGISTRY        = 'docker.io'
    IMAGE_FULL             = "${DOCKER_REGISTRY}/${IMAGE_NAME}"
    DOCKER_CREDENTIALS_ID  = 'dockerhub-cred'
    KUBECONFIG_CRED        = 'k3s-kubeconfig'
    NAMESPACE              = 'default'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        sh 'CI=true npm test -- --watchAll=false'
      }
    }

    stage('Build React') {
      steps {
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
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push ${IMAGE_FULL}:${IMAGE_TAG}
            docker push ${IMAGE_FULL}:latest
          """
        }
      }
    }

    stage('Apply Manifests') {
      steps {
        withCredentials([file(credentialsId: KUBECONFIG_CRED, variable: 'KUBECONFIG')]) {
          withCredentials([usernamePassword(
            credentialsId: DOCKER_CREDENTIALS_ID,
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
          )]) {
            sh """
              kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -

              kubectl create secret docker-registry regcred \
                --docker-server=${DOCKER_REGISTRY} \
                --docker-username="$DOCKER_USER" \
                --docker-password="$DOCKER_PASS" \
                -n ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -

              kubectl apply -f k8s/ -n ${NAMESPACE}
            """
          }
        }
      }
    }

    stage('Deploy to k3s') {
      steps {
        withCredentials([file(credentialsId: KUBECONFIG_CRED, variable: 'KUBECONFIG')]) {
          sh """
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
      echo '✅ CI/CD SUCCESS — image deployed to k3s'
    }
    failure {
      echo '❌ CI/CD FAILED'
    }
    always {
      cleanWs()
    }
  }
}
