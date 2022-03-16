import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            <div>
                <a href='https://www.linkedin.com/in/manueloctavioinfantebarbosa/' rel="noreferrer" target="_blank" className='mx-2 primary-link text-decoration-none'>Linkedin</a>
                <a href='https://github.com/f0xt0xcity/' rel="noreferrer" target="_blank" className='primary-link text-decoration-none'>Github</a>
            </div>

            Copyright &copy; 2022 - Manuel Octavio Infante Barbosa
          </div>
        </div>
    </footer>
  )
}

export default Footer