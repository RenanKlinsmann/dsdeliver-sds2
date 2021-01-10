import './styles.css';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Instagram } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            Ds Deliver
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/renan-klinsmann" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/renanklinsmann/" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;