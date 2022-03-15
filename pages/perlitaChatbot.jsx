import React from 'react'
import Layout from '../components/Layout'


const perlita = () => {
  return (
    <Layout pagina='Perlita la tapatía'>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
        intent="WELCOME"
        chat-title="Perla-la-tapatia"
        agent-id="a9aa81bd-f188-4d26-b30d-96f30111fc82"
        language-code="es"
        chat-icon="https://i.ibb.co/HHSPc34/my-Avatar-1.png"
        ></df-messenger>
        <div className='container pt-5'>
            <p>Chatbot elaborado para guiar a los turistas del estado de Jalisco, actualmente este chatbot se encuentra desplegado en Telegram, Messenger, Google assistant y pagína web.</p>
            <p>Esta foto fue tomada afuera de la secretaria de turismo del estado de Jalisco, el poster color naranja a mi lado derecho es Perlita la tapatía, la cual fue bien recibida por la secretaría de turismo.</p>
            <div className=' d-flex justify-content-between'>
                <a className='btn btn-primary mt-5 mb-5' href="https://www.facebook.com/perlitalatapatia/">Hablar por Facebook</a>
                <a className='btn btn-primary mt-5 mb-5' href="https://t.me/PerlalaTapatia_bot">Hablar por Telegram</a>
            </div>

            <div className='text-center'>
              <img className='img-thumbnail img-fluid' src="/img/perlita.jpg" alt="Imagen de perlita" height='1080' width='1080' />
            </div>
        </div>
    </Layout>
  )
}

export default perlita