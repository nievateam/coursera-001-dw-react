import Img1 from './../../assets/markus-spiske-_GM0Zvw3PzY-unsplash.jpg'
import Img2 from './../../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg'
import Img3 from './../../assets/kobby-mendez-idTwDKt2j2o-unsplash.jpg'
import Img4 from './../../assets/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash.jpg'
import Img5 from './../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
import Img6 from './../../assets/inna-gurina-JspLKUauwSI-unsplash.jpg'

const menuItems = [
  {
    id: 1,
    name: 'Entradas',
    href: '#',
    description: 'Inicia con estos aperitivos.',
    src: Img1,
    alt: 'Una entrada que incluye queso, tomate y aceitunas.',
  },
  {
    id: 2,
    name: 'Platos Fuertes',
    href: '#',
    description: 'Los platillos por los cuales nos conocen.',
    src: Img2,
    alt: 'Una pizza mozzarella.',
  },
  {
    id: 3,
    name: 'Postres',
    href: '#',
    description: 'Cierra con un delicioso postre.',
    src: Img3,
    alt: 'Helado con cono de chocolate.',
  },
  {
    id: 4,
    name: 'Bebidas',
    href: '#',
    description: 'Bebida para acompañar a tu gusto.',
    src: Img4,
    alt: 'Bebida sin alcohol.',
  },
  {
    id: 5,
    name: 'Bar',
    href: '#',
    description: 'Conoce nuestros vinos y licores.',
    src: Img5,
    alt: 'Bebida con alcohol.',
  },
  {
    id: 6,
    name: 'Menú Infantil',
    href: '#',
    description: 'Para los más pequeños, contamos con platillos para ellos.',
    src: Img6,
    alt: 'Mini pizza para los niños.',
  },
]

export default function MenuList() {
  return (
    <>
      {menuItems.map(({ id, alt, src, href, name, description }) => (
        <div key={id} className="flex flex-col">
          <div className="aspect-w-3 aspect-h-4 sm:h-96">
            <a href={href}>
              <img
                alt={alt}
                className="h-full w-full object-cover object-center"
                src={src}
              />
            </a>
          </div>
          <div className="flex flex-1 flex-col space-y-2 p-4 align-center">
            <h3 className="text-sm font-medium text-gray-900">
              <a href={href}>{name}</a>
            </h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
