# ---- Build stage ----
FROM node:18-bookworm AS build

WORKDIR /app
# Use modern ENV format
ENV PATH="/app/node_modules/.bin:${PATH}"

COPY package*.json ./

# Combined update and install to ensure package candidates are found
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    build-essential \
    ca-certificates \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN npm ci
COPY . .
RUN npm run build
