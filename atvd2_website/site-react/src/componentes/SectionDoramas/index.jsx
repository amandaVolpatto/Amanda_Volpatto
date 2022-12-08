import './style.css';


const dados = [
    {
        imagem: './assets/img/Dorama 1.webp',
        titulo: 'Love Alarme',
        descricao: 'Kim Jojo (Kim So-Hyun) é uma jovem doce e gentil que passa a usar o aplicativo Love Alarm,  capaz de avisar ao  usuário quando uma pessoa que gosta de você está a dez metros ...'
    },
    {
        imagem: './assets/img/Dorama 2.jpg',
        titulo: 'Cinderela e os Quatro Cavaleiros',
        descricao: 'Um homem rico contrata a determinada Ha-won, que mora com sua madrasta malvada, para cuidar do mau comportamento dos seus netos.'
    },
    {
        imagem: './assets/img/Dorama 3.jpg',
        titulo: 'Mulher Forte, Do Bong-soon',
        descricao: 'Do Bong Soon é uma jovem que nasceu com uma força sobrenatural, onde se ela não tiver cuidado, ela quebra tudo em que toca. Entretanto, ela tenta desesperadamente se ...'
    },
    {
        imagem: './assets/img/Dorama4.jpg',
        titulo: 'Beleza Verdadeira',
        descricao: 'Im Joo Kyung (Moon Ga Young) é uma estudante colegial super animada e positiva sobre a maioria das coisas – exceto sua aparência! Ela odeia a ideia de ser vista em público sem maquiagem ...'
    }
]


export function SectionDoramas() {

    return (
        <section id="cards">
            <h2>Doramas em Alta</h2>
            <div className="card">
                {dados.map((item, index) => (
                    <div key={index} className="cards-content">
                        <a href="#"><img src={item.imagem} alt="Dorama 1" className="img" /></a>
                        <div className="card-content">
                            <a href="#" className="nome">{item.titulo}<br /></a>
                            <p className="descricao-text">{item.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}