# Ejercicio Coupon

[![node](https://img.shields.io/badge/node-v12.X-yellow.svg)](https://nodejs.org)

## Pre-requisitos

Ejecutar el proyecto `coupon-apigateway`

- `git clone https://github.com/manustes/coupon-apigateway.git`

Para ejecutar la siguiente lambda debes tener instalado.

- [Git](http://git-scm.com/)
- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [aws-cli](https://aws.amazon.com/es/cli/)

## Instalación

- `git clone https://github.com/manustes/lambda-coupon.git`

## Dependencias

Ejecutar `npm install` Para instalar las dependencias del proyecto.

## Construcción

Ejecutar `npm run build` Para la construcción del proyecto y generación del archivo con el contenido de la lambda. se realizara la generacion en la carpeta `dist/` con el archivo .zip.

## Test unitarios

Ejecutar `npm test`.
![test unit OK](https://raw.githubusercontent.com/manustes/lambda-coupon/master/assets/testunit.png)

## Upload de lambda en aws.

- Cuenta de AWS y credenciales
- Configuración aws_access_key_id, aws_secret_access_key, aws_session_token

Ejecutar `aws configure` o modificar directamente archivo `.aws\credentials`.

Ejecutar 

`aws lambda update-function-code \
--function-name lambda-coupon \
--region us-east-2 \
--zip-file fileb://dist/melitest.zip`

## Especificación API 

Request

```json
Method = POST
Url = https://url-api/coupon
Content-Type = application/json
Body = 
{
    "item_ids": [
      "MLA811601010",
      "MLA811601011",
      "MLA810645375",
      "MLA805330648"
    ],
    "amount": 50000
}
```

Response

```json
Method = POST
Content-Type = application/json
Body = 
{
    "item_ids": [
        "MLA811601010",
        "MLA811601011",
        "MLA810645375"
    ],
    "total": 44498
}

```