import React from 'react'
import Link from 'next/link'

const Header = ( { pagina } ) => {
  return (
      <header className='pt-5 container'>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Portafolio | { pagina }</title>
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
            <link href="css/styles.css" rel="stylesheet" />
        </head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="btn btn-success" href="https://drive.google.com/file/d/1NlYMLHy9_aHB8Vv6u4iUktPODFSt8lWz/view?usp=sharing">Descargar CV</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><Link href="/">
                        <a className="nav-link ml-3">Inicio</a>
                    </Link></li>
                    <li className="nav-item"><Link href="about">
                        <a className="nav-link">Acerca de mi</a>
                    </Link></li>
                    <li className="nav-item"><Link href="portafolio">
                        <a className="nav-link">Portafolio</a>
                    </Link></li>
                    <li className="nav-item"><Link href="https://wa.me/+5213311382062">
                        <a className="nav-link">Contacto</a>
                    </Link></li>
                </ul>
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Header