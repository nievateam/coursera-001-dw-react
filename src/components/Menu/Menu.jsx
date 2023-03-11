import MenuList from './MenuList'

export default function Menu() {
  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Nuestro menú
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Todos nuestros platillos son preparados al momento.
        </p>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 lg:max-w-7xl">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <MenuList />
        </div>
      </div>
    </>
  )
}
