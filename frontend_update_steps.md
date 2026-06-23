# 1. Verificar imágenes antes de la actualización
docker ps
docker image
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"

# 2. Reconstruir la imagen del frontend sin usar caché (para asegurar que tome los cambios)
docker-compose build --no-cache frontend

# 3. Recrear el contenedor del frontend
docker-compose up -d --no-deps frontend

# 4. Verifica que el nuevo contenedor esté corriendo
docker ps | grep pinv01_267_frontend

# 5. Verificar imágenes después de la actualización
docker image
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"

# 5. Limpiar imágenes viejas para liberar espacio si hace falta
docker image prune -f
