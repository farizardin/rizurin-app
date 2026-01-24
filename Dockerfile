# ---- Build stage ----
FROM node:18-bookworm AS build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy package files first to leverage cache
COPY package*.json ./

# install build tools for native modules if needed
RUN apt-get update || apt-get update \
 && apt-get install -y --no-install-recommends \
    python3 \
    build-essential \
    ca-certificates \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN node -v && npm -v && npm ci

# copy source and build
COPY . .
RUN npm run build

# production image using nginx on bullseye
FROM nginx:stable-bullseye AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
