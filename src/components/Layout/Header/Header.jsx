const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <header className="bg-indigo-600">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  className="text-base font-medium text-white hover:text-indigo-50"
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              href="#"
            >
              Sign in
            </a>
            <a
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              className="text-base font-medium text-white hover:text-indigo-50"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
