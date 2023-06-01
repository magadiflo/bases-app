# BasesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

# Desplegando la aplicación en GitHub Pages

### En la pc
- Construyamos el build de producción de nuestra aplicación de angular:
  ```
  ng build
  ```
- Se nos creará un directorio **/dist** conteniendo otro directorio con el nombre de nuestro proyecto **/bases-app** y dentro de éste último estará nuestros archivos transpilados.
- Copiaremos el directorio **/bases-app** y lo pegaremos en la raíz de nuestra aplicación de
Angular, renombrándolo con **/docs**.
- Pusheamos los nuevos cambios para que se actualice nuestro repositorio remoto de GitHub.

### En el repositorio de GitHub
Una vez nuestro repositorio remoto contenga el directorio **/docs**, vamos a **settings/pages**, y en la opción de **Source** elegimos **Deploy from a branch**. Luego en **Branch** seleccinoamos la rama donde tenemos nuestro 
directorio creado, en nuestro caso **main**, en el siguiente combo seleccionamos **/docs**, y ahora damos en **Save**.
