import logolinkedin from "../images/miniaturalinkedin.png";
import logoGit from "../images/miniaturagithub.png";
import logoMail from "../images/miniaturamail.png";
export default function Contacto() {
  return (
    <>
      <section className="contenedor contacto">
        <h2>Contacto</h2>
        <p><img className="logoFooter" src={logoMail} alt="logo" /> <a className="link" href="https://www.outlook.com">gabrielledezma@outlook.com</a></p>
        <p><img className="logoFooter" src={logolinkedin} alt="logo" /> <a className="link" href="https://www.linkedin.com/in/gabrielagustinledezma/">Gabriel Agustin Ledezma</a></p>
        <p><img className="logoFooter" src={logoGit} alt="logo" /> <a className="link" href="https://github.com/gabiledezma">gabiledezma</a></p>
      </section>
    </>
  );
}
