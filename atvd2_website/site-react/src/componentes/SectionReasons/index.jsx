import './style.css';

const razoes = [
    { valor: 'VIKIPASS STANDARD', rotulo: 'Anual 209,99', rotulo2: 'Mensal 18,74'},
    { valor: 'VIKIPASS PLUS', rotulo: 'Anual 389,99', rotulo2: 'Mensal 32,99'},
];


export function SectionReasons() {

    return (

        <section id="reasons">
            <h2>Por que nos Escolher?</h2>

            <div className="reasons-content">

                {razoes.map((item, index) => (
                    <div key={index} className="reason">
                        <p className="reason-label">{ item.rotulo }</p>
                        <p className="reason-value">{ item.valor }</p>
                        <p className='reason-value2'>{ item.rotulo2}</p>
                    </div>
                ))}

            </div>
        </section>

    )

}