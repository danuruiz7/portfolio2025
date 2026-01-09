FROM node:20-alpine AS builder

WORKDIR /app

# Instalar PNPM globalmente
RUN npm install -g pnpm

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Construir el proyecto (genera la carpeta dist/)
RUN pnpm build

# --- Etapa de Producción (Servidor Ligero) ---
FROM nginx:alpine AS runtime

# Copiar la configuración básica de Nginx (opcional, si necesitas SPA routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos estáticos desde la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
