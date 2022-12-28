import { Link } from 'react-router-dom'

import Layout from '../components/Layout/Layout'

export default function ErrorPage() {
  return (
    <>
      <Layout>
        <div id="error-page">
          <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
            <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="py-16 text-center">
                <p className="text-2xl font-brand-blue text-brand-blue">404</p>
                <h1 className="mt-2 text-4xl sm:text-5xl">
                  Esta página no existe
                </h1>
                <div className="mt-12">
                  <Link
                    className="text-base font-medium text-brand-blue hover:text-brand-light-blue"
                    to="/"
                  >
                    Regresa a la página principal
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}
