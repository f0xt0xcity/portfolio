import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            <div>
              <Link href='https://www.linkedin.com/in/manueloctavioinfantebarbosa/'>
                <a className='primary-link text-decoration-none'>Linkedin</a>
              </Link>
            </div>

            Copyright &copy; 2022 - Manuel Octavio Infante Barbosa
          </div>
        </div>
    </footer>
  )
}

export default Footer