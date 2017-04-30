# Property Portal #

## Configurar entorno de desarrollo ##

- Para descargar el código:
    - Instalar Git (https://git-scm.com/download)
    - Abrir la consola (cmd, powershell, git bash... cualquiera de ellas)
    - Navegar en la consola a la carpeta donde queremos descargar el código (ejemplo: "cd c:\proyectos")
    - Ejecutar la siguiente instrucción (sin las comillas): "git clone [url del repo en github]" 

- Descargar dependencias
    - Una vez descargado el código, navegar con la consola a la carpeta del proyecto (ejemplo: "cd c:\proyectos\gru5web" )
    - Ejecutar la siguiente instrucción: "npm install" (descargará los paquetes de node necesarios para poder ejecutar la web en nuestro pc)

- Para ejecutar la web en nuestro pc
    - Una vez dentro de la ruta del proyecto en la consola, ejecutar "npm run dev".
    - En la consola aparecerán URLs como "http://localhost:8000". Basta con poner esa ruta en el navegador (Chrome por ejemplo) para ver la aplicación.
    - Mientras esa instrucción se ejecute en el terminal, podemos modificar los archivos de la aplicación, y al guardar los cambios, el navegador refrescará la página y los veremos automáticamente.

## Convención durante el desarrollo ##

- Toda la web estará dentro de la carpeta src
- Cáda página tendrá su propia carpeta con tres ficheros: 
    - el HTML para la interfaz
    - el CSS para las reglas de estílo específicas a dicha página
    - el JS para la lógica de la misma