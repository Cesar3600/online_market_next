# game ecommerce store

## Para crear el E-Commerce usaremos Next.js, React, Hooks, Strapi, Stripe, AWS, SASS, Formik, Yup, buenas practicas y mas.

## node

siempre usar la version LTS

version 12.19.0

## npm

version 6.14.8

## instalar yarn

## seccion 3: Conceptos basicos de ReactJS

estado se modifica este actualiza el componente

## seccion 4 NEXTJS

next es un framework de reaxct que contiene librerias necesarias para desarrllar un proyecto

server side rendering para seo o posicionamiento en buscadores y

usa lazy loading que hace que no carguen los componentes hasta que no sea necesario

tiene su propo souting

tiene su pripo css y sass

para ecommerce esta genial por el seo

crete react app buena opcion para SPA

nextJs seria la mejor opcion si quisieramos crear una web completamente estatica

## SSR

renderizado en la parte del servidor. se encarga de renderizar los html y lo sirve al cliente quitandole la carga
aumentand su velocidad en la web.

cargas mas rapidas

## CSR client side rendering

el cliente tiene una carga grande para cargar una pagina web

## Crear yba app en nextJS

npx create-next-app [nombre de aplicacion]

npm run dev para levantar

## Estructura de Fichero

### en carpeta pages

estaran los archivos en que se trabajaran

### public

carpeta publica

### styles

carpeta de estilos

## SISTEMAS DE RUTAS SIMPLE

se agregaria dentro de la carpeta app como js

## sistema de rutas simples

crea una carpeta pages y dentro coloca las carpetas con los nombres de las paginas que quieres enrutar. dentro crea el archivo page.jsx

```js
export default function Contact() {
  return (
    <div className="min-h-screen">
      <h1>Pagina Contact </h1>
    </div>
  )
}
```

## SISTEMA RUTAS DINAMICAS

es diferente del video
ahora se tiene que crear una carpeta entre [] y dentro el archivo page.jsx

hemos querido agregar useRouter desde next

```js
'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const Jueguito = () => {
  const { games } = useParams()
  console.log('PARAM ==>', games)
  return <div className="min-h-screen">{`este juego es ${games}`}</div>
}

export default Jueguito
```

en el caso del video se quiere crear una ruta como esta
http://localhost:3000/pages/ps5/sonic
http://localhost:3000/pages/xbox/red-dead-redemption

se quiere cambiar tanto el nombre de las plataformas y el nombre de los juegos

esto se logra por ejemplo

```
src
  app
    pages
      [platform]
        [game]
          page.jsx
    otro
      [categorias]
        [producto]
          page.jsx
```

## NAVEGANDO ENTRE PAGINAS

agregaremos links para navegar enter paginas
