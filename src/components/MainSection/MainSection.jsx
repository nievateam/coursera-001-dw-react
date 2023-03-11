import PizzaRestaurantImg from './../../assets/raoul-croes-9C6w4-DMNGU-unsplash.jpg'

export default function Main() {
  return (
    <div className="mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-16 gap-x-24 lg:grid-cols-2">
        <div>
          <img
            alt="Restaurante de pizzas con mesas y platillos italianos."
            src={PizzaRestaurantImg}
          />
        </div>
        <div>
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nieva&apos;s Pizzas
            </p>
          </div>

          <dl className="mt-10">
            <div>
              <dt className="text-lg font-medium text-gray-900">
                Comida italiana en familia.
              </dt>
              <dd className="mt-6 text-md text-gray-500">
                Ubicados en la mejor zona de Ciudad de México, disfruta de
                nuestros platillos y pizzas italianas elabaradas por los mejores
                chefs.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
