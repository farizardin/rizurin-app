# ---- Build stage ----
# Using Ubuntu 24.04 as the base for better reliability in 2026
FROM ubuntu:24.04 AS build

# Set environment variables
ENV NODE_ENV=production
ENV PATH="/app/node_modules/.bin:${PATH}"

# Prevent interactive prompts during apt install
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# 1. Install system dependencies and NodeSource for Node 18
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg \
    build-essential \
    python3 \
 && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get install -y nodejs \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# 2. Build the application
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Production stage ----
FROM nginx:stable-bookworm AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
