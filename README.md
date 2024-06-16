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

se utiliza Link de la libreria "next/link"
no es necesario el uso de a dentro de Link

```js
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Estamos en la Home</p>
      <Link href="/pages/contact">to Contacto</Link>
    </main>
  )
}
```

usar anchor (a) solo cuando se dirigira a paginas externas

## SEO NEXT/HEAD

en header los navegadores buscan los metas

en nuestro caso debemos crear un archivo layout.js

```js
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contacto | next<',
  description: 'Página de contacto de la aplicación Next.js"',
  authors: [{ name: 'Cesar Contreras', url: 'http://www.cesarcontreras.com' }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

dentro del objeto metadata agregar lo necesario

# SECCION 5 INICIANDO PROYECTO DE STRAPI BACKEND

## Creando App y registrando admin

todo se creara con strapi.io

crear carpeta
e-commerce + nextjs + strapi

npx create-strapi-app@latest strapi-ecommerce

lo he creado en linux
/home/kaezar3600/udemy/tienda-ecommerce/strapi-ecommerce

## creando un bucket S3 en AWS

## Configuracion de S3 en strapi

## Creando una cuenta Stripe

# SECCION 6 SISTEMA DE USUARIOS BACKEND

## activar get usuario

activaremos el endpoint

setting/roles/autenticate/users-permissions

en area user activar "find" ya se encuentra activo "me"

es necesario para endpoints de usuarios

## Ampliar modelo del usuario

content-type Builder / user

abajo en boton "add anther field in colection type"

se abre la ventana donde se coloca firstname y en
"advance settings" no seleccionamos nada

hacemos lo mismo para lastname
finalmente click a "save".

con resto tenemos 2 propiedades extra para user que son firstname y lastname

## registro de usuarios

configuremos registro de usuarios
settings/ users & permision pluggins: roles / public / users-permissions

en auth tienes que asegurarte que register este en check
click a "save"

al lado aparece el endpoint del registro
POST | /api/auth/local/register

en insomnia ir a e-commerce game strapi
en + agregar nuevo folder y llamarla "Auth"

agregar un "HTTP request" renombrarla como "register"

colocar la url: http://localhost:1337/
la url se saco de strapi deashboard
y
agregas el endpoint de strapi
/api/auth/local/register

formando la siguiente url

http://localhost:1337/api/auth/local/register

y cambiando el verbo a POST

Si lo envias con send devolvera "bad request"

como la url bas se reutilizara siempre entonces
en la tuerca de settings darle click
y te llevara a "manager environments"

y en localhost agregar:

```js
{
	"BASE_PATH": "http://localhost:1337"
}
```

asegurate estar en localhost

booras la url base y reemplazas por:
\_.BASE_PATH
(control + space)

Ahora cambiar el body por la opcion json
y colocar:

```js
{
	"email":"cesar.contreras.medina.3600@gmail.com",
	"username":"cesar3600",
	"password":"123456"
}
```

ahora click a "send"
se hara un registro de usuario que se podria visualizar en strapi

en strapi ir a: content manager / user

aparecera el registro del usuario ingresado por insomnia

asi cada vez que ingreses un usuario a travez de insomnia y se registra tambien se registra en strapi

## login de usuario

configurar login de usuario para que inicie secion

### en strapi

ir a settings / users & permissions plugin / roles / public / users-permissions

en el area de auth asegurarse que register este seleccionado

click a "save"

### en insomnia

Agregar un nuevo HTTP request
renombrarlo como login
de tipo POST

\_.BASE_PATH/api/auth/local

necesita que se le envie identificador mas password

en body cambiar por Json:

```js
{
"identifier":"cesar.contreras.medina.3600@gmail.com",
"password":"123456"
}
```

si cambias el email que va en identifier por el user que era cesar3600
entonces devolvera lo mismo

## obtener informacion del usuario

### en strapi

ir a settings / users & permissions plugin / roles / authenticated /

users-permissions / activar en el area user el me

copiar el endpoint
GET | /api/users/me

### en insomnia

crear una nueva carpeta llamada user

crear dentro un http request y renombrarla como GetMe

formar la url con el endpoint de strapi

{{ _.BASE_PATH }}/api/users/me

ir a headers
Agregar nuevo campo:
Authorization: Bearer {{ _.TOKEN }}

el TOKEN lo sacas del campo jwt de login

y tendria esta forma:

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4NDk3NjI1LCJleHAiOjE3MjEwODk2MjV9.a4CpGnlA1cddimAk0P5d3lNuqQK6OPOGYg-IorfenZM

los tokens caducan cada poco tiempo por lo tanto

agregar la variable de entorno TOKEN
desde la tuerca / manager environment
agregar TOKEN de la misma forma que se hico con BASE_PATH

tsmbien agregarla en produccion pero vacia

ahora cambiar Bearer \_.TOKEN

## Actualizar usuario

### en strapi

ir a settings / users & permissions plugin / roles / authenticated /
users-permissions / user / activar update
click en save

como vamos actualizar enviares datos por lo tanto usaremos json en el body

PUT | /api/users/:id

### en insomnia

crearmos un nuevo httprequest
lo nombramos updateMe
de tipo PUT

{{ _.BASE_PATH }}/api/users/1

en headers
nuevo campo Bearer {{ _.TOKEN }}

al darle click en SEND

se vizualiza el objeto con propiedades entre ellas firstname y lastname

cambiar body por JSON

{
"firstname":"Cesar Arturo",
"lastname":"Contreras Alva"
}

y al dar send cambiara el objeto resultante
lo que significa que esta actualizando
