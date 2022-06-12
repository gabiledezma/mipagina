import logolinkedin from "../images/miniaturalinkedin.png";
import logoGit from "../images/miniaturagithub.png";
import logoMail from "../images/miniaturamail.png";
export default function Contacto() {
  return (
    <>
      <section className="contenedor contacto">
        <h2>Contacto</h2>
        <p><img className="logoFooter" src={logoMail} alt="logo" /> <a className="link" href="https://www.outlook.com" target="_blank">gabrielledezma@outlook.com</a></p>
        <p><img className="logoFooter" src={logolinkedin} alt="logo" /> <a className="link" href="https://www.linkedin.com/in/gabrielagustinledezma/" target="_blank">Gabriel Agustin Ledezma</a></p>
        <p><img className="logoFooter" src={logoGit} alt="logo" /> <a className="link" href="https://github.com/gabiledezma" target="_blank">gabiledezma</a></p>
      </section>
    </>
  );
}
