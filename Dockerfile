FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && node scripts/make-nginx-redirects.mjs

FROM nginx:1.27-alpine
ENV PORT=8080
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx-redirects.conf /etc/nginx/conf.d/00-redirects.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
