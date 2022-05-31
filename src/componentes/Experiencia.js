import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import logoJava from "../images/logojava.png";
import logoJavaScript from "../images/logoJavaScript.png";
import logoJPA from "../images/logojpa.png";
import logoJdbc from "../images/logojdbc.png";
import logoSpring from "../images/logoSpring.png";
import logoMysql from "../images/logoMySQL.png";
import logoHtml from "../images/logoHTML.png";
import logoCss from "../images/logoCSS3.png";
import logoBootstrap from "../images/logobootstrap.png";
import logoReact from "../images/logoReact2.png";
import logoGithub from "../images/logoGithub.png";

export default function Experiencia() {
  return (
    <>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoJava} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">Java</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en NetBeans IDE 8.2</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoJavaScript} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">JavaScript</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en Visual Studio Code</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoJPA} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">JPA</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en NetBeans IDE 8.2</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoJdbc} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">JDBC</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en NetBeans IDE 8.2</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoMysql} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">MySQL</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en Workbench 8.0 CE</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoSpring} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">Spring y Thymeleaf</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">
                  Trabajados en NetBeans IDE 8.2 y Visual Studio Code
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoHtml} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">HTML 5</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">
                  Trabajado en NetBeans IDE 8.2 y Visual Studio Code
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoCss} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">CSS</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">
                  Trabajado en NetBeans IDE 8.2 y Visual Studio Code
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoBootstrap} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">Bootstrap</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">
                  Trabajado en NetBeans IDE 8.2 y Visual Studio Code
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoReact} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">React</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">Trabajado en Visual Studio Code</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <section className="contenedor">
        <CardGroup>
          <Card className="ancho">
            <Card.Img variant="top" className="logos" src={logoGithub} />
            <Card.Body>
              <Card.Title>
                <h1 className="text-muted">GitHub</h1>
              </Card.Title>
              <Card.Text>
                <p className="text-muted">
                  {" "}
                  Repositorio:
                  <a href="https://github.com/gabiledezma"> github.com/gabiledezma</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
    </>
  );
}
