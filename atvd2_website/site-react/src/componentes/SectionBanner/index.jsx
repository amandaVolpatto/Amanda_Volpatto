import './style.css';
import imgFundo from '../../assets/img/Capa.jpg';


export function SectionBanner() {
    return (

        <section id="banner">
            <div className="banner-content">
                <h1>"Um relacionamento é criar raizes do coração de alguém."</h1>
                <img src={imgFundo} alt="Capa" />

            </div>
        </section>

    )
}