import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música y mas'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum perspiciatis beatae quidem sequi ipsa nemo, delectus est eligendi praesentium nobis sit explicabo vitae distinctio maxime quam excepturi doloremque aliquam molestias!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum perspiciatis beatae quidem sequi ipsa nemo, delectus est eligendi praesentium nobis sit explicabo vitae distinctio maxime quam excepturi doloremque aliquam molestias!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
