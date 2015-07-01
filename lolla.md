##Lolla 2015
Listado de funcionalidades y tareas que deberia ser capaz de realizar el nuevo sitio de Lollapalooza 2015


### ¿Que deberia hacer el sitio?

1. Poder hacer streaming en vivo de dos canales de video
	* Desplegar que esta sonando en cada uno de los respectivos canales // ej. canal 1 "The national" - canal 2 "Arcade fire"

2. Listar y desplegar contenido de video grabado previamente (se debe considerar si solo van a ser los show de los grupos de musica o tambien resumenes del dia u otro video como pulicidad)
	* Los videos subidos a la app deberia contar con descripcion, imagen y titulo
	* El usuario deberia ser capaz de ver indistintamente los videos subidos o el streaming desde la app sin tener que refrescar el sitio
	* El contenido nuevo deberia ser desplegado hacia el usuario sin requerir que este refresque el explorador

3. Desplegar un listado de artistas que se presentan ese dia (Un listado por dia) && (Dejar claro que no tiene relación con el streaming; si no que con los artista que se presentan ese año en lolla)
	* Al hacer click sobre el nombre de un artista se deberia ir a:?

4. Ser responsive

5. Entregar metricas de uso por definir


### ¿Para eso necesitamos?

* Crear una app que se pueda comunicar asyncronicamente con el CDN (a travez de JSON)
* Que los archivos estaticos se sirvan una sola vez y que las actualizaciones al sitio se manejen de forma dinamica
* Que el usuario pueda navegar a travez de la app sin tener que refrescar el navegador (single plage app)
* Tener el menor footprint posible (mobile first)
* Traspazar el mayor numero de fucionalidades posibles a los dispositivos con un menor poder de computo (iphones, android, tablets)
* Tener un proceso para subir nuevos videos a la app que contemple una etapa previa de testing
* Tener un usuario "administrador" capaz de modificar el contenido del sitio (ej. lo que esta sonando en alguno de los canales)

> PS. Subir los videos del año pasado a la app como campaña

