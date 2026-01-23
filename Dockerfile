# Multi-stage Dockerfile for building the Create React App and serving with nginx

# ---- Build stage ----
FROM node:18-alpine AS build
WORKDIR /app

# install dependencies based on package-lock/package.json
COPY package.json package-lock.json* ./
RUN npm ci --silent

# copy source and build
COPY . .
RUN npm run build

# ---- Production stage ----
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx config with one suited for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
