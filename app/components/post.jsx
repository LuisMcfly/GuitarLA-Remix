import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

function Post({post}) {

    const { titulo, contenido, url, imagen, publishedAt} = post
  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="resumen">{contenido}</p>
            <p className="fecha">{formatearFecha(publishedAt)}</p>

            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post