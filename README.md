# XSPACE DEV 
## Requerimientos Funcionales

### Gestión de Contenido por el Administrador:

- El administrador debe poder realizar las operaciones del CRUD (Subir, Leer, Actualizar, Eliminar) sobre el contenido del portal. Esto incluye la capacidad de subir nuevo contenido, modificar contenido existente y eliminar contenido no deseado.
- El administrador debe tener la capacidad de buscar el contenido publicado en el portal utilizando funciones de búsqueda avanzada, como búsqueda por palabra clave, fecha de publicación, categoría, etc.
- Puede realizar comentarios en lo subido por los usuarios administradores.

### Inicio de Sesión para el Administrador:

- Se debe proporcionar un mecanismo de inicio de sesión seguro para el administrador, que requiera tanto correo electrónico como contraseña para verificar la identidad del usuario.
- Después de la autenticación exitosa, el administrador debe tener acceso completo a todas las funcionalidades de gestión de contenido.

### Visualización de Contenido para Usuarios Normales:

- Los usuarios normales deben poder acceder al contenido subido por el administrador a través de una interfaz de tipo blog o Instagram.
- Los usuarios normales pueden interactuar con el contenido, expresando su aprecio mediante la función de "Me gusta" y guardando el contenido de los me gusta, para su referencia futura.
- Los usuarios normales no pueden realizar operaciones de subida, modificación o eliminación de contenido hasta que se registren como administradores.

### Registro de Nuevos Usuarios:

- El proceso de registro debe recopilar la información necesaria, como nombre, correo electrónico y contraseña, para crear cuentas de usuario.
- Un usuario no registrado debe tener acceso limitado a las funcionalidades, mientras que un usuario registrado tendrá privilegios completos de gestión de contenido.

## Requerimientos No Funcionales

### Seguridad y Autenticación:

- El sistema debe garantizar la seguridad de los datos y la autenticación de los usuarios.
- El inicio de sesión del administrador debe requerir tanto correo electrónico como contraseña para verificar la identidad del usuario.

### Rendimiento:

- El sistema debe ser capaz de manejar un alto volumen de usuarios y actividades simultáneas.
- Las operaciones CRUD realizadas por el administrador, como subir, modificar o eliminar contenido, deben completarse de manera eficiente y sin retrasos significativos.

### Usabilidad:

- La interfaz de usuario debe ser intuitiva y fácil de usar tanto para el administrador como para el usuario normal.

### Escalabilidad:

- El sistema debe ser capaz de crecer y adaptarse a medida que aumenta el número de usuarios y el contenido en la plataforma.
- Debe haber una arquitectura escalable que permita agregar más funcionalidades y capacidades según sea necesario en el futuro.

## Historias de Usuario

### Usuario

#### Historial de Usuario: Usuario Normal

#### Visualización de Contenido:

- Puede acceder al contenido subido por el administrador a través de una interfaz de tipo blog o Instagram.
- Puede interactuar con el contenido, expresando su aprecio mediante la función de "Me gusta" y guardando el contenido para su referencia futura.
- Tiene la opción de registrarse como nuevo miembro.
- Debe proporcionar información necesaria como nombre, correo electrónico y contraseña para crear una cuenta de usuario que se convertirá ya una vez iniciando sesión en administrador capaz de realizar la gestión de contenido.
- Puede realizar comentarios en lo subido por los usuarios de tipo administradores.

### Administrador

#### Historial de Usuario: Administrador que Inicia Sesión

#### Gestión de Contenido:

- Puede realizar comentarios en lo subido por los usuarios administradores.
- Puede realizar operaciones CRUD sobre el contenido del portal, incluyendo subir nuevo contenido, modificar contenido existente y eliminar contenido no deseado.
- Tiene la capacidad de buscar el contenido publicado utilizando funciones de búsqueda avanzada, como búsqueda por palabra clave, fecha de publicación, categoría, etc.

#### Inicio de Sesión:

- Debe proporcionar un correo electrónico y contraseña para iniciar sesión de manera segura.
- Después de la autenticación exitosa, tendrá acceso completo a todas las funcionalidades de gestión de contenido.

## Software

- Mongo Atlas
- Mongo SH
- Visual Studio Code
- React

## Modelo de la Base de Datos

## Comandos Instalados

### Server

```bash
npm init
npm install
npm run dev
```
### client
```
npm init
npx create-react-app client
npm install react-google-login –force
npm install gapi-script   
npm install @mui/material @emotion/react @emotion/styled
npm install react-router-dom
```

## Pantallas 
- Esta pantalla es la generica para todos apenas entrar donde se pueden visualizar todos los blog publicados
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/3819d1a2-b881-4bfc-96aa-c0ede1edb87f)

- Esta es la pantalla para el inicio de sesion
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/2d91c3da-8d99-4f11-afa1-85c6ea40a37c)


- Esta es la pantalla para Registrarse
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/80b6a834-4596-412d-96e9-58557d944570)


- Esta pantalla es al ingresar
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/b644b054-47f9-4358-b049-5b96e1c7b94f)

- Se vizualizan los datos del usuario
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/a746b992-2369-420d-bf74-c402e7174741)


- Este es para Agregar , Modificar, Eliminar y Vizualizar la publicaciones del usuario
![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/e4eaed96-38fd-49bf-9828-fa47a9eb31cd)

![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/f147b92d-6769-4a11-81c1-c1675c0fda4c)


![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/dfe6a441-4e71-4a26-b1d9-471ee1f5d61c)

![image](https://github.com/Ale0515-GG/Pruebita/assets/116208731/405b3ffb-9ac5-45ae-9a25-ff3344e1b44c)
