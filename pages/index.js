import Image from 'next/image'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  console.log( router.route );

  return (
    <Layout pagina='Inicio'>
      <div className='container'>
        <main className='pt-5'>
        <div className='text-center mt-5'>
          <Image layout='fixed' width={150} height={150} src={'/img/fotoPerfil.webp'}/>
        </div>
              <div className="container px-4 px-lg-5 h-100">
                  <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div className="col-lg-8 align-self-end">
                          <h1 className="text-primary font-weight-bold text-primary">Manuel Octavio Infante Barbosa</h1>
                          <hr className="divider" />
                      </div>
                      <div className="col-lg-8 align-self-baseline">
                          <p className="text-white-75 mb-5">
                            Aficionado a la tecnología, entusiasta del conocimiento y siempre
                            dispuesto a aprender. Acérrimo practicante de la informática y el marketing.
                          </p>
                          <h2 className='text-primary'>Actualmente estoy rediseñando este sitio, de momento solo podra ver una prueba de mis chatbots en la parte de portafolio.</h2>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    </Layout>
  )
}
