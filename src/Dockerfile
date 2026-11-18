# Etapa 1: build de Angular
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx ng build --configuration production

# Etapa 2: servir los estáticos con nginx (proxy /api -> backend)
FROM nginx:1.27-alpine AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/turnos-app/browser /usr/share/nginx/html
EXPOSE 80
