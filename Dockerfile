# ---- Build stage ----
FROM node:18-alpine AS build

WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"

# install build deps (kalau ada native module)
RUN apk add --no-cache \
    python3 \
    make \
    g++ 

# copy deps first (cache friendly)
COPY package*.json ./
RUN npm ci

# copy source & build
COPY . .
RUN npm run build


# ---- Production stage ----
FROM nginx:alpine

# remove default config if needed
# RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
