**1. Verificar imágenes antes de la actualización**

```bash
docker ps
docker image
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"
```

**2. Reconstruir la imagen del frontend sin usar caché (para asegurar que tome los cambios)**

```bash
docker-compose build --no-cache frontend
```

**3. Recrear el contenedor del frontend**

```bash
docker-compose up -d --no-deps frontend
```

**4. Verificar que el nuevo contenedor esté corriendo**

```bash
docker ps | grep pinv01_267_frontend
```

**5. Verificar imágenes después de la actualización**

```bash
docker image
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"
```

**6. Limpiar imágenes viejas para liberar espacio si hace falta**

```bash
docker image prune -f
```
