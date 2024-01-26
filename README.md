# Nasa Astronomy Picture of the Day App

## Requisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:
- Node.js
- npm (o yarn)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/maxigadea/nassaapp.git
   cd nassaapp
   npm install

## Configuración
Crea un archivo de configuración .env en la raíz del proyecto y establece las variables de entorno necesarias para dev:

API_DOMAIN=https://api.nasa.gov
API_KEY=Cg1ZNEbGfDlq7tx0EwlicDwnM7MnfMLKtfbN7V0y
NODE_ENV=development

## Desarrollo
Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

npm run dev

Esto iniciará el servidor de desarrollo en http://localhost:3000.

## Especificidades técnicas / requerimentos:
Realizarlo con framework Nextjs (13-14) :check:
Utilizar app directory :check:
Utilizar server components, SSR, static generation. :check:
El código debe estar completamente escrito (y correctamente tipado) en typescript. :check:
Lighthouse u otra herramienta debe pasar las siguientes métricas: 
 Performance 90%, Accesibilidad 90%, Best Practices 90% :check:
Diseño responsive :check:
Utilizar la guía de marca de la NASA :check:
Animaciones :check:
Configurar linter que controle estandarización del código :check: (disabled for build)

![Lighthouse screenshot](https://i.postimg.cc/7ZG1skK6/image.png)
