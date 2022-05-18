# Repositorio de Jose para los proyectos de formación de Accenture
Nuestra formación en Accenture ha consistido en escoger una única idea para una aplicación y una API para trabajar, y desarrollarla en 4 tecnologías diferentes: Angular y React en el plano de tecnologías web, y Android y Flutter en el plano de tecnologías móviles, siendo esta última híbirida.

En mi caso, he decidido desarrollar una aplicación de búsqueda de anime (series de animación japonesas) haciéndo uso de la API [Jikan](https://jikan.moe/), la cual extrae la información de la base de datos de [MyAnimeList](https://myanimelist.net/).

## Angular

## React

## Android nativo
La aplicación en Android muestra el fragmento principal con un recycler view de los animes más populares. Hay un cuadro de búsqueda para buscar animes por nombre, y unos radiogroups para filtar por tipo de anime y estado de emision.

![Esta es una imagen](/ImagenesDemo/Android/Android01.png) 

Al clicar en una de las tarjetas, se abre una nueva actividad con los detalles del anime, y un botón para añadirlo a favoritos.

![Esta es una imagen](/ImagenesDemo/Android/Android02.png) 

En el fragmento de login, se permite iniciar sesión desde la API de Google. Si se inicia con éxito, se muestran los datos del usuario.

![Esta es una imagen](/ImagenesDemo/Android/Android03.png) ![Esta es una imagen](/ImagenesDemo/Android/Android04.png) 



## Flutter (en proceso)
La aplicación en Flutter muestra en su pantalla principal los animes más populares, los animes en emisión, y las películas de anime más populares como conjuntos de tarjetas. Desde el buscador, puedes hacer una búsqueda de anime por nombre. 
Conforme se van deslizando tarjetas, se van recargando otras nuevas como si fuera una paginación, empleando el "infinite scroll".

![Esta es una imagen](/ImagenesDemo/Flutter/Flutter00.png) 

Al clicar en una de las tarjetas, se muestran los detalles de ese anime, junto a su título original en japonés, sinopsis y personajes ficticios que participan en la historia.

 ![Esta es una imagen](/ImagenesDemo/Flutter/Flutter02.png) ![Esta es una imagen](/ImagenesDemo/Flutter/Flutter03.png)

Queda pendiente implementar un sistema de login y guardado en favoritos.


