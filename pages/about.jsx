import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'

const about = () => {
  return (
    <Layout pagina={'Acerca de mi'}>
        <div className='container mt-5'>
            <h1 className='text-center text-primary'>Acerca de mi</h1>
            <p className='mt-5'>Aficionado a la tecnología, entusiasta del conocimiento y siempre
            dispuesto a aprender. Acérrimo practicante de la informática y el marketing.</p>
            <p>Soy tecnólogo en informática y computación, cuento con 3 ceritifcaciones de Google en Cloud Computing, Google my bussines y Marketing digital.</p>
            <div className='text-center'>
              <div className='row'>
                <div className='col-6 col-sm-4'>
                  <Image alt='Imagen del certificado de cloud computing' src={'/img/certificadoCloud.webp'} layout='responsive' width={ 480 } height={ 480 }/>
                </div>
                <div className='col-6 col-sm-4'>
                  <Image alt='Imagen del certificado de Google bussines' src={'/img/certificadoBussines.webp'} layout='responsive' width={ 480 } height={ 480 }/>
                </div>
                <div className='col-6 col-sm-4'>
                  <Image alt='Imagen del certificado de marketing' src={'/img/certificadoMkt.webp'} layout='responsive' width={ 480 } height={ 480 }/>
                </div>
              </div>
                <a href='https://drive.google.com/drive/folders/1ARwKxoeIQSiFX4KjuS07I073jRiqWBpO?usp=sharing' rel="noreferrer" target='_blank' className='btn btn-primary mt-5  mb-5'>Ver certificados en pdf</a>
            </div>
        </div>

    </Layout>
  )
}

export default about