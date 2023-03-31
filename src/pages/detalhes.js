import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Interestelar",
    "duracao": "2H49",
    "foto": "interestelar.jpg",
    "ano": 2014,
    "assistido": true,
    "genero": "Ficção científica/Drama",
    "descricao": "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
    "nota": 4.5
},
{
    "nome": "Clube da Luta",
    "duracao": "2H19",
    "foto": "clubedaluta.jpg",
    "ano": 1999,
    "assistido": true,
    "genero": "Suspense/Drama",
    "descricao": "Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.",
    "nota": 4.6
},
{
    "nome": "O Lobo de Wall Street",
    "duracao": "2H59",
    "foto": "wallstreet.jpg",
    "ano": 2014,
    "assistido": false,
    "genero": "Biografia/Drama",
    "descricao": "Durante seis meses, Jordan Belfort (Leonardo DiCaprio) trabalhou duro em uma corretora de Wall Street, seguindo os ensinamentos de seu mentor Mark Hanna (Matthew McConaughey). Quando finalmente consegue ser contratado como corretor da firma, acontece o Black Monday, que faz com que as bolsas de vários países caiam repentinamente. Sem emprego e bastante ambicioso, ele acaba trabalhando para uma empresa de fundo de quintal que lida com papéis de baixo valor, que não estão na bolsa de valores. É lá que Belfort tem a ideia de montar uma empresa focada neste tipo de negócio, cujas vendas são de valores mais baixos mas, em compensação, o retorno para o corretor é bem mais vantajoso. Ao lado de Donnie (Jonah Hill) e outros amigos dos velhos tempos, ele cria a Stratton Oakmont, uma empresa que faz com que todos enriqueçam rapidamente e, também, levem uma vida dedicada ao prazer.",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container row mb-5 text-center">
                <div className='col'>
                    <img src={'/assets/images/' + filmeEscolhido[0].foto} />
                </div>
                <div className='col infos'>
                    <h3 className='mb-4'><b>Filme: </b>{filmeEscolhido[0].nome}</h3>
                    <div>
                        <p><b>Gênero: </b>{filmeEscolhido[0].genero}</p>
                        <div className='d-flex gap-5 justify-content-center'>
                            <p><b>Duração: </b>{filmeEscolhido[0].duracao}</p>
                            <p><b>Ano: </b>{filmeEscolhido[0].ano}</p>
                            <p><b>Nota: </b>{filmeEscolhido[0].nota}</p>
                        </div>
                        <p align="justify"><b>Sinopse: </b>{filmeEscolhido[0].descricao}</p>

                    </div>
                </div>

            </div>
                <Comments filme={filmeEscolhido[0].nome} />
        </div>
    )
}

export default Detalhes;