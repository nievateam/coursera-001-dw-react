import { Link } from 'react-router-dom'

import Logo from './../../../assets/18514975.jpg'

export default function Header() {
  return (
    <header className="bg-brand-yellow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between py-6">
          <div>
            <Link className="flex items-center" to="/">
              <img alt="" className="h-14 w-auto" src={Logo} />
              <p className="ml-3 font-bold">Nieva&apos;s Pizzas</p>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              className="border border-transparent bg-brand-blue py-2 px-4 text-base font-medium text-white hover:bg-brand-light-blue"
              to="/contact"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
