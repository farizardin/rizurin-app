# ---- Build stage ----
FROM node:18-alpine AS build

WORKDIR /app

# optional: jika ada native modules yang butuh compile
RUN apk add --no-cache python3 make g++

# copy package files first to leverage cache
COPY package*.json ./
RUN node -v && npm -v && npm ci

# copy rest and build
COPY . .
RUN npm run build

# production image
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
