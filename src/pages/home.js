import React from 'react';
import Title from './../components/Title/index';
import Filmes from './../components/Filmes/index';

function Home() {
    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            <Filmes />
        </div>
    )
}
export default Home;