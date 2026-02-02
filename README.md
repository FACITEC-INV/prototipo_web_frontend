# Prototipo Web Frontend para Monitoreo de Calidad del Agua

## 1. Contexto y Propósito

Este proyecto es la interfaz de usuario (frontend) para un sistema de monitoreo de la calidad del agua de ríos, enmarcado en el proyecto de investigación **PINV01-267**, financiado por el **CONACYT** de Paraguay.

La aplicación tiene dos vertientes principales:
1.  **Pública:** Permite al público en general visualizar datos sobre la calidad del agua, conocer los detalles del proyecto, el equipo de investigación y acceder a la documentación de la API pública.
2.  **Administrativa:** Un área privada para administrar los dispositivos de monitoreo (sensores) y los usuarios del sistema.

## 2. Arquitectura y Tecnologías

-   **Framework Principal:** [Next.js](https://nextjs.js.org/) 15 (con App Router).
-   **Lenguaje:** JavaScript (con sintaxis JSX).
-   **Estilos:**
    -   [Tailwind CSS](https://tailwindcss.com/) 4 para el diseño de la interfaz.
    -   [DaisyUI](https://daisyui.com/) como plugin de Tailwind para componentes de UI pre-construidos.
-   **Gestión de Estado:** [Nanostores](https://nanostores.github.io/), una biblioteca de estado minimalista.
-   **Visualización de Datos:** [ApexCharts](https://apexcharts.com/) con el wrapper de `react-apexcharts`.
-   **Mapas:** [Leaflet](https://leafletjs.com/) con el wrapper de `react-leaflet`.
-   **Backend:** La aplicación se comunica con una API REST externa.