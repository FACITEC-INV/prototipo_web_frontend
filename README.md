![banner](https://awesomescreenshot.s3.amazonaws.com/image/3964926/58607340-8339b7c9a0f1b71d9d48f2d893244d4d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260204T171647Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=36f53397040bacffda3b31b9882fda6843b66b2e95536305df2123ea6a721682)

# Prototipo Web Frontend para Monitoreo de Calidad del Agua

Este proyecto es la interfaz de usuario (frontend) para un sistema de monitoreo de la calidad del agua de ríos, enmarcado en el proyecto de investigación **PINV01-267**, financiado por el **CONACYT** de Paraguay.

## Sobre el Proyecto

- **Título del Proyecto:** PINV01-267: Sistema de red de sensores inalámbricos para el monitoreo de la calidad del agua en cauces hídricos del departamento del Canindeyú.
- **Institución:** FACITEC (Facultad de Ciencias y Tecnología - Universidad Nacional de Canindeyú).
- **Financiamiento:** CONACYT (Consejo Nacional de Ciencia y Tecnología).
- **Objetivo:** Desarrollar un sistema informático para el monitoreo de la calidad del agua de cauces hídricos utilizando datos obtenidos a través una red de sensores inalámbricos

## Arquitectura del Proyecto

Este proyecto sigue una arquitectura modular basada en Next.js con el App Router, promoviendo la separación de intereses y la escalabilidad.

```
prototipo_web_frontend/
├── app/                  # Contiene todas las rutas de la aplicación y páginas (App Router de Next.js).
│   ├── api-docs/           # Página para visualizar la documentación de la API externa.
│   ├── dispositivos/       # Módulo de administración de dispositivos.
│   │   └── components/     # Componentes específicos de la sección de dispositivos (Form, Table).
│   ├── login/              # Página de inicio de sesión.
│   ├── monitoreo/          # Módulo principal de monitoreo de datos.
│   │   └── components/     # Componentes para visualización de datos (gráficos, mapa, formularios de filtro).
│   ├── politicas/          # Página de políticas de privacidad.
│   ├── proyecto/           # Página con información del proyecto y el equipo.
│   ├── styles/             # Estilos globales de la aplicación.
│   ├── users/              # Módulo de administración de usuarios.
│   │   └── components/     # Componentes específicos de la sección de usuarios (Form, Table).
│   ├── favicon.ico
│   ├── layout.jsx          # Layout principal de la aplicación (Navbar, Footer, Notificaciones).
│   ├── not-found.jsx       # Página 404 personalizada.
│   └── page.jsx            # Página de inicio.
├── commonComponents/     # Componentes React reutilizables a nivel global.
│   ├── AuthGuard.jsx       # Componente para proteger rutas que requieren autenticación.
│   ├── Footer.jsx          # Pie de página.
│   ├── Navbar.jsx          # Barra de navegación.
│   ├── Notification.jsx    # Componente para mostrar notificaciones.
│   ├── Spinner.jsx         # Componente de spinner de carga.
│   └── styles/             # Estilos específicos para componentes comunes.
├── stores/               # Gestión de estado global con Nanostores, organizada por módulos.
│   ├── auth/               # Módulo de autenticación (acciones, estado del token, estado del usuario).
│   ├── dispositivos/       # Módulo de estado para la administración de dispositivos.
│   ├── monitoreo/          # Módulo de estado para la sección de monitoreo (datos de gráficos, filtros, etc.).
│   ├── notification/       # Módulo para gestionar notificaciones.
│   ├── users/              # Módulo de estado para la administración de usuarios.
│   └── utils/              # Utilidades y validaciones genéricas.
├── public/
│   ├── img/
│   └── ...
├── .dockerignore
├── .env.example          # Ejemplo de variables de entorno.
├── .gitignore
├── package.json          # Metadatos del proyecto y lista de dependencias.
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
└── README.md             # Este archivo.
```

## Tecnologías Clave Utilizadas

| Tecnología             | Descripción                                                                                                |
| :--------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Next.js 15**         | Framework de React para el desarrollo de aplicaciones web full-stack, con renderizado en el servidor (SSR) y generación de sitios estáticos (SSG). |
| **React 19**           | Biblioteca JavaScript para construir interfaces de usuario interactivas y declarativas.                    |
| **Tailwind CSS 4**     | Framework CSS utility-first para diseñar rápidamente interfaces personalizadas.                            |
| **DaisyUI 5**          | Plugin de Tailwind CSS que proporciona componentes pre-construidos y personalizables.                    |
| **Nanostores**         | Biblioteca de gestión de estado minimalista y reactiva.                                                    |
| **ApexCharts**         | Biblioteca de gráficos moderna y responsiva para visualizar datos interactivos.                            |
| **React-ApexCharts**   | Wrapper de React para ApexCharts, facilitando su integración en componentes React.                         |
| **Leaflet**            | Biblioteca JavaScript de código abierto para mapas interactivos adaptados a dispositivos móviles.          |
| **React-Leaflet**      | Componentes React para la integración sencilla de mapas Leaflet.                                           |
| **Day.js**             | Biblioteca ligera de manipulación de fechas y horas.                                                       |
| **jwt-decode**         | Utilidad para decodificar tokens web JSON (JWT).                                                          |
| **pnpm**               | Administrador de paquetes rápido y eficiente para Node.js, utilizado para gestionar las dependencias del proyecto. |
| **Autoprefixer**       | Plugin de PostCSS para añadir prefijos de proveedor CSS automáticamente.                                  |

## Datos de Configuración (Variables de Entorno)

Las siguientes variables de entorno son necesarias para el correcto funcionamiento de la aplicación. Deben ser definidas en un archivo `.env` en la raíz del proyecto.

| Variable de Entorno        | Descripción                                                        | Valor de Ejemplo             |
| :------------------------- | :----------------------------------------------------------------- | :--------------------------- |
| `NEXT_PUBLIC_API_BASE`     | URL base de la API backend a la que se conecta la aplicación.       | `http://192.168.0.25:8080/api` |
| `NEXT_PUBLIC_API_DOCS_URL` | URL de la documentación de la API pública.                         | `http://docs/url`            |
| `NEXT_PUBLIC_LOGIN_ENDPOINT` | Endpoint específico para la autenticación de usuarios.             | `/auth/login`                |

## Cómo Ejecutar el Proyecto

Sigue estos pasos para poner en marcha la aplicación en tu entorno local o en Docker.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

*   **Node.js**: Versión 20.x o superior.
*   **pnpm**: Puedes instalarlo globalmente con `npm install -g pnpm`.
*   **Git**: Para clonar el repositorio.
*   **Docker y Docker Compose** (opcional, para ejecutar con Docker).

### Paso a Paso

#### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd prototipo_web_frontend
```

#### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y copia el contenido de `.env.example`, ajustando los valores según sea necesario:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
NEXT_PUBLIC_API_BASE=http://localhost:8080/api # O la URL de tu API
NEXT_PUBLIC_API_DOCS_URL=http://localhost:8080/swagger-ui/index.html # O la URL de tus docs
NEXT_PUBLIC_LOGIN_ENDPOINT=/auth/login
```

#### 3. Instalar Dependencias

Utiliza pnpm para instalar las dependencias del proyecto:

```bash
pnpm install
```

#### 4. Ejecutar en Modo Desarrollo

Para iniciar la aplicación en modo desarrollo (con hot-reloading y turbopack):

```bash
pnpm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

#### 5. Construir y Ejecutar en Modo Producción

Para construir la aplicación para producción:

```bash
pnpm run build
```

Luego, para iniciar la aplicación construida:

```bash
pnpm run start
```

La aplicación estará disponible en `http://localhost:3000`.

#### 6. Ejecutar con Docker (Opcional)

Si prefieres usar Docker, asegúrate de tener Docker y Docker Compose instalados.

1.  **Construir la imagen Docker:**
    ```bash
    docker build -t prototipo-web-frontend .
    ```
2.  **Ejecutar el contenedor:**
    ```bash
    docker run -p 3000:3000 --env-file .env prototipo-web-frontend
    ```
    O si tienes un `docker-compose.yml` configurado:
    ```bash
    docker-compose up --build
    ```

La aplicación estará disponible en `http://localhost:3000` (o el puerto que configures en Docker Compose).

## Autores y Contacto

- **Investigador Principal:** Daniel Romero
- **Director del proyecto:** Rodrigo Martínez
- **Equipo de Desarrollo:** David Ruiz Diaz, Nazario Ayala, Angel Heimann, Gloria Ortiz.
- **Contacto:** dir.invext@facitec.edu.py

## Licencia

Este proyecto está licenciado bajo los términos de la Licencia Pública General de GNU v3.0. Consulta [LICENSE.md](LICENSE.md) para más detalles.


