const comentarios = [{
    "filme": "Interestelar", 
    "comentarios": [{
        "usuario": "Mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Gabriel",
        "comentario": "Esse filme está no meu Top 1!"
    },
    {
        "usuario": "João",
        "comentario": "Obra de arte!"
    }
    ]
},
{
    "filme": "Clube da Luta", 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Gabriel",
        "comentario": "Obra prima!"
    }
    ]
},
{
    "filme": "O Lobo de Wall Street", 
    "comentarios": [
    {
        "usuario": "Gabriel",
        "comentario": "Pretendo assistir em breve!"
    }
    ]
}
]

const Comments = ({ filme }) => {
    const comentariosFilme = comentarios.filter(f =>
        f.filme === filme
    );
    console.log(comentariosFilme[0].comentarios)
    return (
        <div className="container text-center">
            <h5 className="mb-4">Comentários: </h5>
            {comentariosFilme[0].comentarios.map((comentario, index) => (
                <p><b>{comentario.usuario}: </b>{comentario.comentario}</p>
            ))}
        </div>
    )
}

export default Comments