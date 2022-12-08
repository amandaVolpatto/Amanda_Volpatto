import './style.css'
export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <p className="footer-logo">Dorameiras</p>
                        <p>A pessoa que gosta de dorama é chamada de dorameira ou dorameiro. O nome dorama tem origem na
                            palavra “drama”. Portanto, doramas nada mais são que produções dramáticas desenvolvidas em
                            países orientais. Como todas as séries, eles são formados por uma sequência de episódios e às
                            vezes têm mais de uma temporada...</p>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Contato</p>
                        <ul>
                            <li>+55 (46) 9 9999-9999</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">K-drama</a></li>
                            <li><a href="#">Viki</a></li>
                            <li><a href="#">Kocowa</a></li>
                            <li><a href="#">Dopeka</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <span className="facebook"></span>
                    <span className="twitter"></span>
                    <span className="instagram"></span>
                    <span className="linkedin"></span>
                </div>
                <div className="footer-copyright">
                    &#169; 2022 - Todos os direitos reservados
                </div>
            </div>
        </footer>
    )
}