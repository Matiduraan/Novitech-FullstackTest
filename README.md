
# Fullstack test para Novitech

El mismo se encuentra configurado para correr sobre localhost, con MySql.

## Settings:

Puerto de Rest API: 3000
Puerto MySql: 3306

## Configuracion SQL

cliente
    - nro_cliente
    - Nombre
    - Apellido
    - email

cuenta
    - nro_cuenta
    - nro_cliente
    - saldo
    - tipo_de_cuenta

transferencia
    - id_transferencia
    - nro_cliente
    - cuenta_origen
    - cuenta_destino
    - monto
    - fecha_creacion

## Instrucciones de instalacion:

Ingresar a la carpeta web-app desde un terminal y ejecutar `npm install`.
Para comenzar a correr la Rest API ejecutar en un terminal `npm start` en la carpeta "REST API".
Correr la web-app con `npm run dev`


