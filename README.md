# Just Notes

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipos de alta fidelidad](#4-prototipos-de-alta-fidelidad)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

***

## 1. Preámbulo

Hoy en día no es práctico imaginar el desarrollo web sin HTML, CSS y JavaScript,
esta última es el alma del desarrollo de aplicaciones web.
[React](https://reactjs.org/) y [Angular](https://angular.io/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusar (lo cual es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

Como desarrolladora front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

* Este proyecto se creó con la finalidad de ayudar al usuario a crear notas para que pueda recordar lo escrito. Trabajada en React usando una base de datos creada en Firebase de Google que nos ayudará a guardar la información deseada, podremos ingresar con cualquier correo electrónico, crear un usuario y recuperar la contraseña de haberlo olvidado. Esto fue realizado con las funciones asíncronas que nos otorga el servicio de Firebase.
* Adicionalmente, podemos agregar notas en una interfaz totalmente claro y de fácil intuición para el usuario con el fin que pueda ubicar con mayor entendimiento los elementos que conforman al aplicativo.
* Solo se podrá ver dos notas por usuario, si desea ver el anterior, tendrá que eliminar el actual, esto con el modo de no sobrecargar la vista para mayor visibilidad de la información guardada. 
* Por último, podrá cerrar su sesión sin temor a alguna invasión de su privacidad. Las rutas están protegidas, por lo que para acceder al componente de las notas, tendrá que haber iniciado sesión.

## 3. Historias de usuario

### Definición del producto

***

### Historias de usuaria

#### [Historia de usuaria 1] Debería poder crear cuenta, iniciar y cerrar sesión

Yo como usuaria debo poder crear una cuenta y autenticarme usando login de
Google para acceder a mis notas.

***

#### [Historia de usuaria 2] Debería poder tomar nota

Yo como usuaria quiero tomar nota para no depender de mi mala
memoria y tener presente en todo momento los apuntes ó cosas importantes que
antes escribía en papel.

***

#### [Historia de usuaria 3] Debería poder ver las notas

Yo como usuaria quiero leer mis notas para recordar lo que escribí
en ese momento.

***

#### [Historia de usuaria 4] Debería poder editar las notas

Yo como usuaria quiero editar notas para poder modificar lo que
escribí antes.

***

#### [Historia de usuaria 5] Debería poder borrar notas

Yo como usuaria quiero borrar una nota para no volver a verla.

***

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Agregar el contenido de mi nota.
* Modificar las notas.
* Eliminar notas.
* Se ve y funciona bien en una _Tablet_

## 4. Prototipos de alta fidelidad

Tanto el mockup como los prototipos, fueron realizados en Figma que nos da las herramientas para visualizar a gran escala el proyecto web. A continuación, se mostrarán algunos prototipos como el Login, Home y el Popup que nos notificará cada que haya algún mensaje que informar un mensaje al usuario.

![screenshot](https://i.ibb.co/zZWkTJY/Captura-de-pantalla-2023-11-20-015149.png)

![screenshot](https://i.ibb.co/x15np3b/Captura-de-pantalla-2023-11-20-015134.png)

![screenshot](https://i.ibb.co/pQFNqCC/Captura-de-pantalla-2023-11-20-014833.png)

## 5. Consideraciones técnicas
El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.

Para este proyecto necesitas crear una Web App con **una librería o
framework de JavaScript** (`React` o `Angular`) y **Firebase**.

Para este proyecto tendrás que manejar _vistas_. Esto significa que cada sección
tendrá su propia URL, la cual indica que _vista_ o _componente_ será mostrado en
pantalla. Para ello necesitaremos investigar acerca de _la API para el manejo de
rutas (en la librería o framework que elijas)_ y el concepto de _Single Page
Application_.
