# Visualización avanzada: Ataques terroristas por mes en el año 2015

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


## Objetivo del proyecto
Este proyecto surge como práctica final de la asignatura de Análisis de Datos Avanzada, recreando un pequeño ejemplo de arquitectura de visualización de datos, comprendiendo una conexión a una base de datos no relacional, un pequeño servidor de consulta a la base de datos y servicio de los mismos, y una visualización mediante una App de Angular.


## Requerimientos

La aplicación desarrollada en Angular se compone de un servidor que toma los datos de una base de datos mongodb y de un consumidor que muestra los datos por el navegador.
Para su funcionamiento se requieren los siguientes componentes:
1. [MongoDB](https://www.mongodb.com/)
2. [Node](https://nodejs.org/es/)
3. [Jupyter Notebook](https://anaconda.org/anaconda/anaconda-navigator) (opcional, sólo para ver la transformación de datos), 


## Base de datos mongoDB

Los datos originales se pueden encontrar en https://www.kaggle.com/START-UMD/gtd
Levantar el servidor mongo en una consola de comandos con:
```
mongod
```
Para no tener que reproducir la creación de la base de datos, se encuentra exportada en .../VisualizacionFinal/data/terrorismDB.json.
Para importar la base de datos correctamente a mongoDB utilizar desde la línea de comandos:
```
cd .../VisualizacionFinal/data
mongoimport --db terrorismDB --collection data --file terrorismDB.json
```
Es importante que los nombres sean los especificados por la configuración de lectura del servidor.


## Servidor de datos

Dentro de la carpeta .../VisualizacionFinal/SERVER existen dos versiones del servidor:
- serverdormongo.js en caso de que se disponga de una base de datos mongo con la base de datos como se especifica en la sección de base de datos.
- server.js que genera los mismos datos en forma de ejemplo.

Para levantar el servidor que consulta los datos y los ofrece utilizar uno de los dos servidores:
```
cd .../VisualizacionFinal/SERVER/
node servermongo.js
# O bien:
node server.js
```
Una vez levantado el servidor, podemos observar los datos resultados en http://localhost:3000/data


## Visualización de los datos

Para la visualización de los datos se ha desarrollado una aplicación en Angular.
Para levantar el servicio utilizar:
```
cd .../VisualizacionFinal/
npm start
```
La visualización se podrá observar en http://localhost:4200/ junto con una breve reflexión sobre los datos.


## Tests unitarios

Ejecutar `ng test` para ejecutar los test unitarios via [Karma](https://karma-runner.github.io).


## Tests end-to-end

Ejecutar `ng e2e` para ejecutar los test end-to-end via [Protractor](http://www.protractortest.org/).

## Otra información
Autor: Eduardo Bustos Miranda (https://github.com/Bignone)

Fecha: 02/05/2018