# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
# نکته: اگر از Vite استفاده می‌کنید، مسیر خروجی معمولا 'dist' است. 
# اگر از CRA استفاده می‌کنید، آن را به 'build' تغییر دهید.
COPY --from=builder /app/dist .

# Custom nginx config to support React Router (optional but recommended)
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
