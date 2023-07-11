# Backend Blog de Recetas
  este repositorio es el backend de [https://github.com/NahuFed/BlogRecetas]
## Instalación

1. Clona este repositorio frontend: `git clone https://github.com/NahuFed/BlogRecetas`
2. Navega al directorio del proyecto: `cd BlogRecetas`
3. Instala las dependencias: `npm install`
4. Crear un archivo llamado .env en la raiz del repositorio frontend y escribir en el: `VITE_API_USUARIO=http://localhost:4001/apirecetas/auth/` y
`VITE_API_RECETA=http://localhost:4001/apirecetas/recetas`
5. Clona el repositorio del backend en otra carpeta: `git clone https://github.com/NahuFed/backend-ejercicio-14`
6. Instala las dependencias del backend: `npm install express --save npm i babel-cli babel-preset-env  express-validator  mongoose  cors morgan dotenv`
 
## Uso


1. Iniciar el servidor de la api en una terminal desde el repositorio del backend: `npm run dev` 
2. Inicia la aplicación desde una terminal en el repositorio frontend: `npm run dev`
3. Abre tu navegador web y ve a `http://localhost:5173/`
 
## Acceder a modo administrador
    En la seccion de inicio de sesion llenar los campos con:
    mail: admin@nrecetas.com
    contraseña: 123456aA$
 
## Características

- Esta aplicacion muestra una web con recetas de cocina
- Cada receta de cocina tiene una pagina detallada con sus ingredientes y un paso a paso
- Puedes acceder con el usuario de administrador para crear, editar y borrar las recetas

## Herramientas utilizadas 🛠
- Javascript
- React
- React-Bootstrap
- API
- Sweet Alert
- React Router Dom
- Node
- Express
- MongoDB
## Datos del Desarrollador

- Nombre: Nahuel Rodriguez
- GitHub: [NahuFed](https://github.com/NahuFed)

## Implementación

Este proyecto está hecho con React y utiliza Vite como herramienta de desarrollo. Utiliza MongoDB para levantar las apis de donde saca su informacion. La aplicación muestra las recetas cargadas en la api.

