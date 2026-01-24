# ---- Tahap 1: Build Stage ----
FROM ubuntu:24.04 AS build

# Hindari prompt interaktif saat instalasi package
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Perbaiki format ENV sesuai standar modern (Warning LegacyKeyValueFormat)
ENV PATH="/app/node_modules/.bin:${PATH}"

# 1. Update dan Instal dependensi sistem serta Node.js 18 via NodeSource
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg \
    build-essential \
    python3 \
 && curl -fsSL https://deb.nodesource.com | bash - \
 && apt-get install -y nodejs \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# 2. Instal dependensi aplikasi
COPY package*.json ./
RUN npm ci

# 3. Copy source code dan build
COPY . .
RUN npm run build


# ---- Tahap 2: Production Stage ----
# Menggunakan Nginx berbasis Ubuntu untuk konsistensi sistem
FROM ubuntu:24.04 AS production

# Instal Nginx
RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Copy hasil build dari tahap sebelumnya ke direktori default Nginx Ubuntu
# Catatan: Di Ubuntu, direktori defaultnya adalah /var/www/html
COPY --from=build /app/build /var/www/html

# Forward log nginx ke stdout/stderr agar bisa dibaca docker logs
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]
