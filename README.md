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
    - [Pedido](#Pedido)
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

<img width="1076" alt="image" src="https://user-images.githubusercontent.com/102702041/189547570-865ee8ae-08bc-439e-8353-ee0672d2e89f.png">


<img width="1073" alt="image" src="https://user-images.githubusercontent.com/102702041/189547563-a3ed58ff-decc-4592-b09d-c79f3fc4fbae.png">

### Home

Vista sencilla de bienvenida, con pancarta promocional que redirige a la vista de productos de la promoción.

<img width="998" alt="image" src="https://user-images.githubusercontent.com/102702041/189547582-06542cd2-2122-4f33-a3f1-5e3be10149b5.png">


### Productos

Muestra todos los productos disponibles en la tienda, su precio y stock.

<img width="971" alt="image" src="https://user-images.githubusercontent.com/102702041/189547600-58fbe1fd-68dd-49f5-bc6a-dcd0d2aabc45.png">


### Productos detalle

Muestra todo lo anterior del producto seleccionado con una pequeña descripcion y dos botones, uno para volver a todos los productos y el otro para realizar un pedido.

<img width="742" alt="image" src="https://user-images.githubusercontent.com/102702041/189547616-5624e421-9ab0-4ec1-82d6-fae3919fbc08.png">

### Pedidos

Vista pedidos donde muestra el estado, la fecha y botones para cancelar pedido si si se está procesando o eliminar si ya se ha recibido

<img width="645" alt="image" src="https://user-images.githubusercontent.com/102702041/189547660-ee30a8a4-9d25-4b4c-80e1-6bfb568bf418.png">

### Contacto

Formulario de contacto simple para dudas/quejas

<img width="608" alt="image" src="https://user-images.githubusercontent.com/102702041/189547674-b4d6ed0c-6fc6-462e-b67c-7ebf4296245b.png">


### Login

Vista login con validaciones

<img width="362" alt="image" src="https://user-images.githubusercontent.com/102702041/189547761-f16d5274-d3c2-4859-915d-04e95d36cfeb.png">

### Register

Vista register con validaciones

<img width="457" alt="image" src="https://user-images.githubusercontent.com/102702041/189547773-cf26a1c4-e324-4cf3-ab85-45df11e81942.png">

### Perfil

Muestra los datos del usuario y dos botones, uno para eliminar la cuenta y otro para modificar el perfil

<img width="465" alt="image" src="https://user-images.githubusercontent.com/102702041/189547724-ccfb0081-a5bb-47a6-bd65-baa5c95530da.png">

### Modificar perfil

Muestra de nuevo todos los campos permitiendo modificar la dirección y dos botones, uno para confirmar y otro para volver al perfil

<img width="443" alt="image" src="https://user-images.githubusercontent.com/102702041/189547741-b8f02a97-dd13-4a32-82a5-5c3197c3b3bf.png">

### Panel Admin

Muestra los pedidos de todos los usuarios y permite eliminarlos

<img width="514" alt="image" src="https://user-images.githubusercontent.com/102702041/189547684-7de352cf-be6f-4f3b-b62c-6a09e0308eba.png">

## Autor

#### [Marc Cordón Muñoz](https://github.com/marcormun)
