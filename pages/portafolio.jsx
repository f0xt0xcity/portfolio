import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const portafolio = () => {
  return (
    <Layout pagina='Proyectos'>
        <main className='pt-5'>
            <div className='container pt-5'>
                <Link href='perlitaChatbot'>
                    <a className='btn-block btn btn-success text-white'>Chatbot guía de turismo</a>
                </Link>
            </div>
            <div className='container pt-5'>
                <Link href='dentista'>
                    <a className='btn-block btn btn-success text-white'>Chatbot citas dentista</a>
                </Link>
            </div>
            <div className='container pt-5'>
                <Link href='nutriologa'>
                    <a className='btn-block btn btn-success text-white'>Chatbot citas nutriologa</a>
                </Link>
            </div>
        </main>
    </Layout>
  )
}

export default portafolio