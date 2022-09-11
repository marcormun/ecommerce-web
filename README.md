# Z-SNKRS ecommerce

Frontend para la tienda electrónica de sneakers Z-SNKRS, centrada en productos con "exclusividad".

Hecha con React, Redux y Tailwindcss

[Enlace](https://github.com/marcormun/ecommerce-backend) al github del backend.

# Tabla

- [Descripcion](#Descripción)
- [Vistas](#Vistas)
    - [Header](#Header)
    - [Home](#Home)
    - [Productos](#Productos)
    - [Productos detalle](#Productos-detalle)
    - [Contacto](#Contacto)
    - [Contacto](#Contacto)
    - [Login](#Login)
    - [Register](#Register)
    - [Perfil](#Perfil)
    - [Modificar perfil](#Modificar-perfil)
- [Autor](#Autor)

# Descripción

Pagina web sencilla para comprar productos exclusivos, con una vista principal para poner las promociones, una vista de los productos, que te envian a la pagina de detalle donde puedes hacer un pedido y una vista de los pedidos.

A parte vistas de usuario para registrarse, logearse y modificar el perfil/ eliminar cuenta.

El administrador tiene una vista para eliminar pedidos.


## Vistas

### Header

Consta de un logo que redirige a home, vista productos, pedidos, contacto, login y registro.

En caso de haber iniciado sesión login y register desaparecen y en su sitio se muestran las vistas de perfil y de cerrar sesión. El administrador a parte tiene la vista de admin.

### Home

Vista sencilla de bienvenida, con pancarta promocional que redirige a la vista de productos de la promoción.


### Productos

Muestra todos los productos disponibles en la tienda, su precio y stock.

### Productos detalle

Muestra todo lo anterior del producto seleccionado con una pequeña descripcion y dos botones, uno para volver a todos los productos y el otro para realizar un pedido.

## Contacto

Formulario de contacto simple para dudas/quejas

## Login

Vista login con validaciones


## Register

Vista register con validaciones

## Perfil

Muestra los datos del usuario y dos botones, uno para eliminar la cuenta y otro para modificar el perfil

## Modificar perfil

Muestra de nuevo todos los campos permitiendo modificar la dirección y dos botones, uno para confirmar y otro para volver al perfil

## Panel Admin

Muestra los pedidos de todos los usuarios y permite eliminarlos

## Autor

#### [Marc Cordón Muñoz](https://github.com/marcormun)
