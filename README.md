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

```js
{{ _.BASE_PATH }}/api/users/1
```

en headers
nuevo campo Bearer {{ _.TOKEN }}

al darle click en SEND

se vizualiza el objeto con propiedades entre ellas firstname y lastname

cambiar body por JSON

```js
{
"firstname":"Cesar Arturo",
"lastname":"Contreras Alva"
}
```

y al dar send cambiara el objeto resultante
lo que significa que esta actualizando.

# SECCION 7: SISTEMA DE DIRECCIONES BACKEND

## creando el modelo address:

modelo para cuando un usuario haga un pedido
entonces hay que ver a donde mandarle ese pedido

### en strapi

content-type Builder/ create new collection type
se abrira un modal donde se ingresa el nombre que sera: address

en advance settings
ninguna de las opciones debe estar marcada

seleccionamos textfield

- nombre: title
  shortfield
  en advance settings required field
  agregar otro campo

lo mismo para:

- nombre: name
- nombre: address
- nombre: city
- nombre: state
- nombre: postal_code
- nombre: phone

ahora relacionemos al usuario con address

### IMPORTNTISIMO

seleccionamos relations DE LA LISTA DE TIPOS DE CAMPO

se presenta dos cuadros con una relacion entre ellas

en la segunda caja(derecha) seleccionar User (from user-permissions)

en la primera caja colocar el nombre user

y en la relacion la primera

click en finish
click en save

con esto reiniciara el servidor y creara la coleccion que hemo seteado

veras las 2 tipos de colecciones user y address

cuando selecciones addres abra un boton llamado "create new entry"

mostrara un formulario conn los campos asignados anteriormente

en mi caso cree una nueva entrada agregue los datos y lo relacione con el usuario cesar3600

## endpoint para crear direcciones

como solo los usuarios autenticados deben poder crear direcciones entonces
seleccionamos en strapi:  
settings / users & permissions plugin / roles / authenticated

permision
seccion address
check en create

se creara un endpoint
/api/addresses
con el metodo POST

en insomnia:

crear carpeta address a nivel de las otras carpetas (user, auth)
crear httprequest renombrarlo como CreateAddress
crear una url con la base mas el /api/addresses

como es una peticion en Headers
crear un campo
Authorization Bearer \_.TOKEN

como hay que mandar algo ya que es POST
en body cambiar a JSON

y agregar el siguiente objeto

```js
{
	"data":{
		"title":"Oficina valencia",
		"name":"Agustin navarro",
		"address":"Calle gardenias 333",
		"city":"Lima",
		"state":"Lima",
		"postal_code":"15311",
		"phone":"98009899",
		"user":"1"
	}
}
```

en user va 1 por que es el id del user en GetMe en insomnia

## endpoint para obtener direcciones propias

para obtener las direcciones del usuario

buscamos la documentacion de strapi REST API en el area developer resources
buscar api parameters
en este caso nos interesa el filtering, vijarse en los operadores como el $eq, $ne, etc

### en strapi

seleccionamos en strapi:  
settings / users & permissions plugin / roles / authenticated / seccion adress

mantener seleccionado create y find

click en "save"

### en insomnia

crear en carpeta address un nuevo HTTP Request
GET GetMyAddresses

agregar {{ _.BASE_PATH }}/api/addresses

como necesita obtener datos necesita estar autenticado
por lo tanto en Headers
agregar campo

Authorization
Bearer {{ _.TOKEN }}

si damos clic a "send" va mostrar todas las direcciones
pero como queremos una en especifico tenemos que editar la url de GET

para entender mejor como trabaja los filtros

{{ _.BASE_PATH }}/api/addresses?populate=\*
que mostrar todo el objeto:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Mi casa",
        "name": "cesar contreras",
        "address": "Jr. Sanchez Cerro 371",
        "city": "lima",
        "state": "lima",
        "postal_code": "15311",
        "phone": "934522259",
        "createdAt": "2024-06-17T01:00:22.740Z",
        "updatedAt": "2024-06-17T01:00:22.740Z",
        "user": {
          "data": {
            "id": 1,
            "attributes": {
              "username": "cesar3600",
              "email": "cesar.contreras.medina.3600@gmail.com",
              "provider": "local",
              "confirmed": true,
              "blocked": false,
              "createdAt": "2024-06-15T23:15:08.175Z",
              "updatedAt": "2024-06-16T02:11:34.668Z",
              "firstname": "Cesar Arturo",
              "lastname": "Contreras Alva"
            }
          }
        }
      }
    },
    {
      "id": 4,
      "attributes": {
        "title": "Oficina valencia",
        "name": "Agustin navarro",
        "address": "Calle gardenias 333",
        "city": "Lima",
        "state": "Lima",
        "postal_code": "15311",
        "phone": "98009899",
        "createdAt": "2024-06-17T04:31:26.807Z",
        "updatedAt": "2024-06-17T04:31:26.807Z",
        "user": {
          "data": {
            "id": 1,
            "attributes": {
              "username": "cesar3600",
              "email": "cesar.contreras.medina.3600@gmail.com",
              "provider": "local",
              "confirmed": true,
              "blocked": false,
              "createdAt": "2024-06-15T23:15:08.175Z",
              "updatedAt": "2024-06-16T02:11:34.668Z",
              "firstname": "Cesar Arturo",
              "lastname": "Contreras Alva"
            }
          }
        }
      }
    },
    {
      "id": 5,
      "attributes": {
        "title": "Oficina navarrete",
        "name": "Adolfo manuel aguilar novoa",
        "address": "jr. navarrete 777",
        "city": "Lima",
        "state": "Lima",
        "postal_code": "15333",
        "phone": "945222123",
        "createdAt": "2024-06-17T04:34:32.844Z",
        "updatedAt": "2024-06-17T04:34:32.844Z",
        "user": {
          "data": {
            "id": 2,
            "attributes": {
              "username": "adolfo",
              "email": "dolfo@gmail.com",
              "provider": "local",
              "confirmed": false,
              "blocked": false,
              "createdAt": "2024-06-17T04:32:44.341Z",
              "updatedAt": "2024-06-17T04:32:44.341Z",
              "firstname": "adolfo",
              "lastname": "aguilar"
            }
          }
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 3
    }
  }
}
```

no es necesario agregar data, solo user e id

```json
				"user": {
					"data": {
						"id": 2,
```

entonces si queremos filtrar por el usuario 1 seria:

{{ _.BASE_PATH }}/api/addresses?filters[user][id][$eq]=1

"$eq" es el operador de strapi para buscar igualdad

doc
https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering

## endpoint para eliminar direcciones

### en strapi

seleccionamos en strapi:  
settings / users & permissions plugin / roles / authenticated / seccion adress

mantener seleccionado create, find y agreggamos delete

### insomnia

Crear hhtpRequest renombrarlo como DeleteAddress dentro de carpeta Adrdress

url
DELETE: {{ _.BASE_PATH }}/api/addresses/:id

agregar authorization en Headers
Authorization
Bearer {{ _.TOKEN }}

y en la url cambiar el :id por el id que quiere eliminar
{{ _.BASE_PATH }}/api/addresses/6

en este ejemplo se elimino el registro con el id = 6

## endpoint para actualizar direcciones

### en strapi

seleccionamos en strapi:  
settings / users & permissions plugin / roles / authenticated / seccion adress

mantener seleccionado create, find, delete y agregamos update

### insomnia

Crear hhtpRequest renombrarlo como UpdateAddress dentro de carpeta Adrdress

url
PUT: {{ _.BASE_PATH }}/api/addresses/:id

agregar authorization en Headers
Authorization
Bearer {{ _.TOKEN }}

y en la url cambiar el :id por el id que quiere actualizar

{{ _.BASE_PATH }}/api/addresses/1

en body cambiarlo a json y colocar

```json
{
  "data": {
    "address": "Los aloes #613, SJL"
  }
}
```

No es necesario pasar todos los datos, solo parcialmente los datos que necesites cambiar.
en este caso se cambio la direccion del objeto con el id 1

## endpoint para obtener direccion por su id

### en strapi

seleccionamos en strapi:  
settings / users & permissions plugin / roles / authenticated / seccion adress

mantener seleccionado create, find, uopdate, delete y agregamos findOne

### insomnia

Crear hhtpRequest renombrarlo como GetAddressById dentro de carpeta Adrdress

url
GET: {{ _.BASE_PATH }}/api/addresses/:id

agregar authorization en Headers
Authorization
Bearer {{ _.TOKEN }}

y en la url cambiar el :id por el id que quiere actualizar

{{ _.BASE_PATH }}/api/addresses/1

solo se mostrara el objeto con el id que esta buscando

# SECCION 8: sistema de plataformas backend

## creando el modelo de plataformas

modelo de plataformas donde pertenecen os juegos
crearemos un nuevo tipo de coleccion

en content-type builder / collection types / + create new single type

display name: Platform

agregaremos campos:

add "new text field"
name: title
check required field

agregar campo UID
name: slug
attached field: title (por que queremos que el nombre en minusculas aparesca como slug)
de tipo obligatorio o requerido

agregar campo number
name: order
number format: integer
y de tipo obligatorio o requerido

para el logo:
agregar new media field
name: images

select alowed types of media: solo seleccionar images(jpg, png,..)
que sea campo requerido u obligatorio

click en "save"

una vez salvado ir a "Content Manager"
seleccionar Platform
aqui crearemos una nueva plataforma

clic en "create new entry"

title: PlayStation
slug: actualizar y dejarlo como playstation
order: 1
logo: arrastrar logo de playstation
clic "save"
clic publicar

hacer lo mismo para pc, switch y xbox.

## endpoints para obtener plataformas

creamos 4 plataformas: playstation, xbox, pc y nintendo switch

### en strapi

seleccionamos en strapi:  
settings / users & permissions plugin / roles / public / platform /
clic en find

copiar endpoint:
/api/platforms

clic 'save'

### insomnia

Crear una nueva carpeta Platform
Crear un httpRequest renombrarlo como GetAll

url
GET: {{ _.BASE_PATH }}/api/platforms

Dando clic a "send" se mostrara todas las plataformas
sin embargo estos resultados no tienen la imagen
para visualizar todos los campos aplicar

```js
{{ _.BASE_PATH }}/api/platforms?populate = *
```

en este caso mejor usar icon : populate = icon

## endpoints para obtener una plataforma por su slug

queremos que mediante el slug me devuelva los datos de la plataforma
no hay que activar ningun endpoint

Crear un nuevo hhtrequest
GET | GetBySlug

```js
GET | {{ _.BASE_PATH }}/api/platforms?filters[slug][$eq]=nintendoswitch
```

estamos filtrando utilizando el slug buscando un valor igual a nintendoswitch

# SECCION 9: Sistema de juegos backend

## Creando el modelo de juego

### en strapi

seleccionamos en strapi:  
Content-Type Builder / collection types / create new collection type
displayname : Game

agregar campos:
tipo: textfield
name: title
required

tipo: relation
en el segundo cuadro seleccionar: platform y cambiara el primer cuadro a platform
platform --- primera opcion(game tiene una plataforma) ---platform

tipo: number
name: price
number format: decimal
required

tipo: number
name: discount
number format: integer

tipo: uid
name: slug
attached field : title
required

tipo: textfield
name: summary
long term
required

tipo: textfield
name: video
required

tipo: media
name: cover
single media
select ype: images
required

tipo: media
name: wallpaper
single media
select ype: images
required

tipo: media
name: screenshots
multiple media
select ype: images
required

tipo: date
name: releaseDate
type: date (ex:01/01/2023)
required

clic 'finish'
clic "save"

ahoa ingresaremos un registro
Content manager / create an entry

CREAR POR LO MENOS 15 ENTRADAS DE JUEGOS

## Endpoint para obtener juego

para activaremos el end point para los videojuegos
como son datos publicos tiene que ser publicos

### en strapi

settings / users & permissions plugin / roles / public
seleccionar games y seleccionar find

endpoint: GET /api/games

### en insomnia

crear carpeta Games
agregar httprequest renombrarlo como GetAll
en url: {{ _.BASE_PATH }}/api/games
clic en "send" mostrar todos los registros de juegos.

## Endpoint para obtener un juego con su ID

### en strapi

settings / users & permissions plugin / roles / public
seleccionar games y seleccionar findOne

endpoint: GET /api/games/:id

### en insomnia

crear carpeta Games
agregar httprequest renombrarlo como GetGameById
en url: {{ _.BASE_PATH }}/api/games/3
clic en "send" el registro del juegos segun su id.

# SECCION 10: sistema de lista de deseos

## creando el modelo de la lista de deseos

En Content-Type Builder / collection types / create

llamarla wishlist

agregar campos

tipo: relation
en el segundo cuadro seleccionar: User (from: users-permissions) y cambiara el
nombre a users-permissions, cambiarlo a user.
user --- primera opcion ---users-permissions (se vera vacio)

tipo: relation
en el segundo cuadro seleccionar: Game y cambiara a game
game --- primera opcion ---game (pero se visualizara vacio)

la idea es que ese usuario tiene ese jueg en su lista de deseo por eso son esos 2 campos:
user y game.

clic en 'save'

ahora crearemos una nueva entrada

en content manager / Wishlist / create an entry

seleccionar un usuario y un juego salvar y publicar

## Endpoint para anadir a la lista de deseos

### en strapi

settings / users & permissions plugin / roles / authenticate
en el area whistlist y seleccionar create

endpoint: POST /api/wishlists

clic en "save"

### en insomnia

crear carpeta Wishlist
agregar httprequest renombrarlo como AddWishlist

en url: POST {{ _.BASE_PATH }}/api/wishlists

en Headers darle permisos

Authorization
Bearer {{ _.TOKEN }}

en Body cambiarlo por JSON

```json
{
  "data": {
    "user": "1",
    "game": "3"
  }
}
```

aqui al ingresar el valor veras que el juego no se ha agregado al registro en wishlist en insomnia
esto es por que el sistema no consigue obtener el juego con ese id, lo que pasa es que no tiene
habilitada la opcion de buscar un juego con el endpoint

para esto primero eliminamos el registro de wishlist que tiene el error en la columna game

luego vamos a settings / user & permissions plugin / roles / Authenticated /games
check en find y salvamos

entramos a authenticated por que en insomnia el hhttp request necesita permisos de authentificacion
por lo tanto game tambien debe estar autentificado ya que es su descendente

lo que pasa es que strapi cuando le mandas un dato relacionado lo que hace es buscar mediante su id

en nuestro caso le pasamos user: 1 y game:3
entonces primero busca el id 1 de user y como user tiene activado el find entonces funciona. Pero
como game no tiene el find actiado entonces no puede encontrar el id 3

clic en "send" el registro del juegos segun su id.

## Endpoint chequear un juego

### en strapi

esto es para saber si hemos marcado un juego como favorito o no
vamos a settings / user & permissions plugin / roles / Authenticated /wishlist
check en find y "save"

copia el endpoint

GET | /api/wishlists

clic "save"

la idea es que busquemos filtrando con find si un registro contiene el id del usuario registrado y el id del nombre de la columna game que esta registrada.

### en insomnia

Dentro de la carpeta Wishlist
agregar httprequest renombrarlo como CheckGameWishlist

en url: GET {{ _.BASE_PATH }}/api/wishlists

en Headers darle permisos

Authorization
Bearer {{ _.TOKEN }}

## Endpoint para eliminar un juego de la lista

## Endpoint para obtener la lista de deseos
