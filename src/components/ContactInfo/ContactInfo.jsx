export default function ContactInfo() {
  return (
    <>
      <form action="#" className="grid grid-cols-1 gap-y-6" method="POST">
        <div>
          <input
            autoComplete="name"
            className="input-contact-form"
            id="full-name"
            name="full-name"
            placeholder="Tu nombre competo"
            type="text"
          />
        </div>
        <div>
          <input
            autoComplete="email"
            className="input-contact-form"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            type="email"
          />
        </div>
        <div>
          <input
            autoComplete="tel"
            className="input-contact-form"
            id="cellphone"
            name="cellphone"
            placeholder="Tu número de teléfono"
            type="text"
          />
        </div>
        <div>
          <textarea
            className="input-contact-form"
            id="additional-info"
            name="additional-info"
            placeholder="Información adicional"
            rows={4}
          />
        </div>
        <div>
          <button
            className="border border-transparent bg-brand-blue py-2 px-4 text-base font-medium text-white hover:bg-brand-light-blue"
            type="submit"
          >
            Enviar información
          </button>
        </div>
      </form>
    </>
  )
}
