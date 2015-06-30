##Lolla 2015
Listado de funcionalidades y tareas que deberia ser capaz de realizar el nuevo sitio de Lollapalooza 2015


### ¿Que deberia hacer el sitio?

1. Poder hacer streaming en vivo de dos canales de video
	* Desplegar que esta sonando en cada uno de los respectivos canales // ej. canal 1 "The national" - canal 2 "Arcade fire"

2. Listar y desplegar contenido de video grabado previamente (se debe considerar si solo van a ser los show de los grupos de musica o tambien resumenes del dia u otro video como pulicidad)
	* Los videos subidos a la app deberia contar con descripcion, imagen y titulo
	* El usuario deberia ser capaz de ver indistintamente los videos suvidos o el streaming desde la app sin tener que refrescar el sitio
	* El contenido nuevo deberia ser desplegado hacia el usuario sin requerir que este refresque el explorador

3. Desplegar un listado de artistas que se presentan ese dia (Un listado por dia) && (Dejar claro que no tiene relación con el streaming; si no que con los artista que se presentan ese año en lolla)
	* Al hacer click sobre el nombre de un artista se deberia ir a:?

4. Ser responsive

5. Entregar metricas de uso por definir


### ¿Para eso necesitamos?

* Crear una app que se pueda comunicar asyncronicamente con el CDN (a travez de JSON)
* Que los estaticos se sirvan solo una vez y que las actualizaciones al sitio sean de forma dinamica
* Que el usuario pueda navegar la app sin tener que refrescar (one page view)
* Tener el menor footprint posible (tanto de peso como optimización)
* Buscar una forma traspazar estas fucionalidades que hacen uso intensivo de JS a los usuarios con sistemas menos potentes (iphones, android, tablets)
* Gestionar a un usuario administrador capaz de subir nuevos videos
* Tener un sandbox previo a producción para hacer test de los cambios que se realicen al sitio

> PS. Subir los videos del año pasado a la app como campaña

