import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { skills, experiences, projects, awards } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-info text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/perfil.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Christopher Enrique Ortiz</h1>
              <h3>Ingeniero en Ciencias de la Computación</h3>
              <p>
              Poseo conocimientos en áreas como el análisis de sistema, desarollo y diseño web, implementación de sistemas de información, desarrollo móvil y administración de base de datos.
              Me considero una persona capaz de integrarme fuertemente a los equipos con una clara visión de que, si bien las personas poseen un gran potencial, el mismo se ve aumentado exponencialmente cuando se colabora con un equipo eficiente y eficaz.
              </p>
              <a class="btn btn-light" href="mailto:cortizperdomo1@gmail.com">
                Contacto
              </a>
              <a class="btn btn-light" href="https://github.com/crist-12">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a class="btn btn-light" href="https://www.linkedin.com/in/crist-12/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Habilidades</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 pt-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                   {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-12 py-2">
        {/* Premios */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Premios</h1>

            <ul>
              {/* List Item Experience */}
              {awards.map(({ name, description, place }, index) => (
                <li key={index}>
                  <h4>{name}</h4>
                  <h5>{place}</h5>
                  <p>
                   {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
    {/* Porfolio */}
  </Layout>
);

export default Index;
