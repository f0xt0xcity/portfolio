import Layout from "../components/Layout"


const nutriologa = () => {
  return (
    <Layout pagina='Citas Nutriologa'>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
        intent="WELCOME"
        chat-title="NutriologoCitas"
        agent-id="8560c9d2-a70a-466b-8a7f-5c17fd348568"
        language-code="es"
        chat-icon="https://fmdiabetes.org/wp-content/uploads/2019/02/nutriologo-01.png"
        ></df-messenger>

        <div className='container mt-5'>
            <p>Al realizar una cita con este chatbot usted podra ver la cita agendada en este calendario así como se le hara llegar un correo de confirmación de su cita.</p>
            <p className='text-success'>El chatbot hace una consulta con NodeJs y trae los horarios libres para agendar la cita, podra poner esto en practica agendando una cita cierto día y luego tratar de agendar otra cita el mismo día a la misma hora, así podras ver que esa hora ya no esta disponible.</p>
        </div>
    </Layout>
  )
}

export default nutriologa