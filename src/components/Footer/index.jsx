import "./styles.css";
import logoSESI from "../../assets/logoFooter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoSESI} alt="" />
        <p> Copyright &copy; Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
