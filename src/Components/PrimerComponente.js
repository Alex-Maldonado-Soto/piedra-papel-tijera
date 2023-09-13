import React, {useState} from 'react'

export const PrimerComponente = () => {

    // let nombre = "Alex Maldonado";
    let web = "alexmaldonado.com";


    const [nombre, setNombre] = useState("Alexander Maldonado")

    let cursos = [
        "Master en Javascript",
        "Master en php",
        "Master en React",
        "Master en CSS" 
        ]

        const cambiarNombre = (nuevoNombre) => {
            setNombre(nuevoNombre);
        }

  return (
    <section>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' :'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Nuevo Nombre'></input>

        <button onClick={ e => cambiarNombre ("Alex Maldonado")}></button>

    <h2>Cursos: </h2>
    <ul>
        {
            cursos.map( (curso, indice) => {
                return  (<li key={indice}>
                    {curso}
                </li>)
            })
        }
    </ul>



    </section>
  )
}


