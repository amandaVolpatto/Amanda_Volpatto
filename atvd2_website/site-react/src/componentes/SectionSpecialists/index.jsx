import './style.css';

const especialistas = [
    {
        nome: 'Gong Yoo',
        cidade: 'Coreia',
        descricao: 'Gong Yoo é o nome artístico de Gong Ji Chul, um ator sul-coreano  O nome artístico é composto pelo sobrenome de seu pai "Gong" e o sobrenome de sua mãe "Yoo".Nascido em 10 de julho de 1979, Gong Yoo é descendente do filósofo chinês Confúcio,oriundo do clã Gokbu Gong. Não se sabe muito sobre a infância de Gong Yoo. Ele estudou teatro na ...'
    },
    {
        nome: 'Park Min Young',
        cidade: 'Coreia',
        descricao: 'Park Min Young é uma popular atriz sul-coreana. Nascida em 4 de março  de 1986, ela começou sua carreira no entretenimento com um comercial para a SK Telecom em 2005.  Ela começou a atuar um ano mais tarde, em 2006, na comédia "Chute alto imbatível!". Ela é mais conhecida por seus papéis principais nos dramas de televisão "O escândalo ...'
    },
    {
        nome: 'Lee Min Ho',
        cidade: 'Coreia',
        descricao: 'Lee Min Ho é um dos atores mais populares da Ásia em atividade. Nascido em 22 de junho de 1987, não deve ser confundido com o Lee Min Ho mais jovem (nascido em 28 de junho de 1993), um outro ator coreano. A popularidade deste Lee Min Ho se entende muito  além das fronteiras da Coreia, para a China e outros países em todo o mundo. Ele tem até ...'
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Autores em Alta</h2>
            <div className="specialists-content">

                { especialistas.map((item,index) => (
                    <div key={index} className="specialist">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="specialist-detail">{ item.descricao }</p>
                    </div>
                ))}

            </div>
        </section>
    )
}