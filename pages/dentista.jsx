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
            <p className='text-success'>El chatbot hace una consulta con NodeJs y trae los horarios libres para agendar la cita, podra poner esto en practica agendando una cita cierto día y luego tratar de agendar otra cita el mismo día a la misma hora, así podras ver que esa hora ya no esta disponible.</p>
        </div>
    </Layout>
  )
}

export default dentista