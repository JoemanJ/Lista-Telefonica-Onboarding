# STAGE 1: BUILD
FROM node:20-alpine AS build
WORKDIR /app

# Copia a lista de dependências e instala
COPY Lista-Telefonica/package.json Lista-Telefonica/package-lock.json ./
RUN npm install

# Copia o código de faz o build
COPY ./Lista-Telefonica .
RUN npm run build

# STAGE 2: RUN SERVER (nginx)
FROM nginx:alpine AS final

# Copia o projeto construído pro diretório do nginx
COPY --from=build /app/dist/Lista-Telefonica/browser /usr/share/nginx/html

# Configuração customizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]