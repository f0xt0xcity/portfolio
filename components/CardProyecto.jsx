import Link from 'next/link'


const CardProyecto = ( { proyecto } ) => {

    const { titulo, descripcion, imagen, linkGithub, linkPrueba} = proyecto;
  return (
    <div className="card  m-3 text-center" style={{width: "18rem"}}>
        <img src={ imagen } className="card-img-top" height="300" width="480" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center">{ titulo }</h5>
            <p className="card-text">{ descripcion }</p>

            <div className='d-flex justify-content-between'>
                    <a href={ linkGithub } target="_blank" className="btn btn-primary">Link github</a>
                <Link href={ linkPrueba }>
                    <a className="btn btn-primary">Probar Chabot</a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CardProyecto