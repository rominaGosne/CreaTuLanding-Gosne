# Ecommerce App

Una aplicación de Ecommerce desarrollada en React.js, react-bootstrap y Firebase.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)

## Instalación

1. Clona este repositorio en tu máquina local ejecutando el siguiente comando en tu terminal:
`git clone https://github.com/rominaGosne/CreaTuLanding-Gosne`

1. Navega al directorio del proyecto:

    `cd ecommerce-app`

1. Instala las dependencias del proyecto ejecutando:

    `npm install`

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

    `
    REACT_APP_APIKEY=TuApiKey
    REACT_APP_AUTHDOMAIN=TuAuthDomain
    REACT_APP_PROJECTID=TuProjectId
    REACT_APP_STORAGEBUCKET=TuStorageBucket
    REACT_APP_MESSAGINGSENDERID=TuMessagingSenderId
    REACT_APP_APPID=TuAppId
    `

## Uso

Para utilizar la aplicación de ecommerce, sigue estos pasos:

1. Asegúrate de haber configurado Firebase correctamente (ver [Configuración de Firebase](#configuración-de-firebase)).
1. Inicia la aplicación ejecutando el siguiente comando:

    `npm start`

1. Abre tu navegador web y visita [http://localhost:3000](http://localhost:3000).

1. Explora la tienda, agrega productos al carrito y procede al proceso de pago.

## Configuración de Firebase

Para configurar Firebase y obtener las credenciales necesarias, sigue estos pasos:

1. Visita [Firebase Console](https://console.firebase.google.com/).

1. Crea un nuevo proyecto de Firebase.

1. En la sección "Project Overview", haz clic en el botón "Agregar aplicación" para agregar una nueva aplicación web.

1. Sigue las instrucciones para registrar tu aplicación y obtener las credenciales necesarias (apiKey, authDomain, projectId, etc.).

1. Copia las credenciales y pégala en el archivo `.env` en tu proyecto.

## Características

- **Exploración de productos:** Los usuarios pueden explorar una variedad de productos disponibles en la tienda.
- **Agrega al carrito:** Los usuarios pueden agregar productos al carrito de compras.
- **Proceso de pago:** Los usuarios pueden completar el proceso de pago proporcionando detalles de envío y pago.
- **Gestión del carrito:** Los usuarios pueden ver y editar los productos en su carrito de compras.

## Créditos

Este proyecto fue desarrollado por Romina Gosne para el curso de React Js - Coderhouse.