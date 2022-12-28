import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

import ContactInfo from '../components/ContactInfo'

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <article className="py-8 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Reserva tu visita
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-500">
            Llena el formulario y nos pondremos en contacto contigo para
            reservar tu visita con nosotros.
          </p>
          <dl className="mt-8 text-base text-gray-500">
            <div>
              <dd>
                <p>XXXXXXX XXXXX XXXXX</p>
                <p>Ciudad de México, México</p>
              </dd>
            </div>
            <div className="mt-6">
              <dd className="flex">
                <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                <span className="ml-3">+52 (XXX) XXXX-XXXX</span>
              </dd>
            </div>
            <div className="mt-3">
              <dd className="flex">
                <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                <span className="ml-3">reservaciones@nieva.pizzas</span>
              </dd>
            </div>
          </dl>
        </article>
        <article className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <ContactInfo />
        </article>
      </section>
    </>
  )
}
