import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import CardProyecto from '../components/CardProyecto'


const portafolio = () => {

    const proyectos = [
        {
            titulo : 'Perlita la tapatía',
            descripcion : 'Chatbot guia de turismo',
            imagen : 'https://i.ibb.co/HHSPc34/my-Avatar-1.png',
            linkGithub : 'https://github.com/f0xt0xcity/ChatbotPerlita',
            linkPrueba : 'perlitaChatbot'
        },
        {
            titulo : 'Chatbot citas para dentista',
            descripcion : 'Chatbot guia de turismo',
            imagen : 'https://www.pinclipart.com/picdir/middle/522-5227159_clipart-of-itself-technician-and-milf-clipart-dentist.png',
            linkGithub : 'https://github.com/f0xt0xcity/ChatbotCitas',
            linkPrueba : 'dentista'
        },
        {
            titulo : 'Chatbot cita para nutriologa',
            descripcion : 'Chatbot guia de turismo',
            imagen : 'https://fmdiabetes.org/wp-content/uploads/2019/02/nutriologo-01.png',
            linkGithub : 'https://github.com/f0xt0xcity/ChatbotCitas',
            linkPrueba : 'nutriologa'
        },
    ]

  return (
    <Layout pagina='Proyectos'>
        <div className='container-lg pt-5 pb-5'>
            <div className='row justify-content-between'>

            { proyectos.map( proyecto => (
                <div className='col-md-3'  key = { proyecto.titulo }>
                    <CardProyecto proyecto = { proyecto }/> 
                </div>
            ))}
            </div>
        </div>
    </Layout>
  )
}

export default portafolio