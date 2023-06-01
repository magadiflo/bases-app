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

### Abriendo aplicación desplegada en GitHub
Cada vez que hagamos un cambio en la carpeta **/docs**, automáticamente en la opción de **Actions** veremos que
se ejecutará un flujo de trabajo. Si damos click en él, veremos que nos mostrará la **url** donde desplegó nuestra aplicación.

### Error: No se muestra nuestra aplicación
Lo que pasa es que GitHub sube nuestra aplicación en una url similar a esta:
```
https://magadiflo.github.io/bases-app/
```
Y no mostrará la página, porque los archivos que busca nuestra aplicación de Angular, los está buscando en la 
raíz de ese dominio, es decir:
```
https://magadiflo.github.io/
```
Pero como observamos en la primera URL, GitHub lo desplegó en ese path adicional: **.../bases-app/**.

### Solución al error anterior
Para decirle a Angular que busque los archivos en el directorio actual donde se desplegó, podemos ir al
index.html de nuestro directorio **/docs** y en el siguiente tag agregarle el punto, así:
```html
<base href="./">
```
Lo que hace el tag anterior es que todos los paths relativos se basarán en el path relativo donde se encuentre
desplegado este index.html
