import React from 'react'
import Layout from '../components/Layout'

const dentista = () => {
  return (
    <Layout pagina='Citas dentista'>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
        intent="WELCOME"
        chat-title="CitasDentista"
        agent-id="684f4be6-1af2-46a0-b0f7-0d1e264822df"
        language-code="es"
        chat-icon="https://www.pinclipart.com/picdir/middle/522-5227159_clipart-of-itself-technician-and-milf-clipart-dentist.png"
        ></df-messenger>

        <div className='container mt-5'>
            <p>Al realizar una cita con este chatbot usted podra ver la cita agendada en este calendario así como se le hara llegar un correo de confirmación de su cita.</p>
            <p className='text-success'>El chatbot hace una consulta con NodeJsa a la API de Google Calendar y trae los horarios libres para agendar la cita, podra poner esto en practica agendando una cita cierto día y luego tratar de agendar otra cita el mismo día a la misma hora, así podras ver que esa hora ya no esta disponible.</p>
        </div>

        <h3 className='text-center text-danger'>* Si no se muestra una burbuja para hablar con el Chatbot, recarga la pagina.</h3>
        <p className='text-danger text-center'>Esto es debido a que este sitio fue desarrollado con React y el codigo html necesita ser cargado.</p>

    </Layout>
  )
}

export default dentista