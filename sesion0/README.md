# Sesión 0: - Entorno de Desarrollo con nodejs
1. Se ha creado un proyecto con vscode
2. En la terminal, hemos iniciado el proyecto, con npm. De forma que se ha creado el package.json
3. Se ha instalado la libreria `lite-server` con `npm i lite-server` y se ha creado la carpeta `node_modules`
4. La libreria `lite-server` nos permitirá crear un servidor local para nuestro proyecto
5. Usamos el archivo `.gitignote` para ignorar el directorio `node_modules` y sus archivos en el commit
6. Dentro del `package.json` tenemos listado las dependencias de nuestro proyecto, de forma que el `node_modules` no es necesario incluiro en github.
7. Para levantar el servidor localhost, Se ha añadido a `scripts` del archivo `package.json ` lo siguiente: `"dev: lite-server"` y con `npm run dev ` ejecutamos el lite-server
8. Se crea la carpeta `./src` donde estarán los archivos 'principales'
9. Se crea el archivo `bs-config.json` para configurar en qué puerto queremos levantar el servidor, que tipo de archivos, y que busque los archivos index, que esten DENTRO de la carpeta `./src` NOTA: Las rutas iran siempre con punto seguido de la ruta.