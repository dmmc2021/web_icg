import React, { Fragment, useState } from "react";
import icgImage2 from "../../img/icg-image2.jpg";
import icgImage4 from "../../img/icg-image4.jpg";
import icgImage3 from "../../img/icg-image3.jpeg";
import icglogo from "../../img/icg_logo.jpg";
import Modal from "react-bootstrap/Modal";

function Servicios() {

    const [show, setShow]=useState(null)
    const [show2, setShow2]=useState(null)
    const [show3, setShow3]=useState(null)
    const [show4, setShow4]=useState(null)
    const [show5, setShow5]=useState(null)
    const [show6, setShow6]=useState(null)
    const [show7, setShow7]=useState(null)
  
 return (
    <Fragment>
        <div className="content-servicios" id="servicios">
            <h2>Nuestros servicios</h2>
       

        <div className="flex_a">
            <div className="section1">
                <h3>Consultoría financiera</h3>
                  <div className="image1 imagen_2">
                      <img src={icgImage2}  alt="icg-image2" />
                  </div>
                <ul>
                    <li onClick={() => setShow(true)}>Personas Jurídicas</li>
                    <li onClick={() => setShow2(true)}>Personas Naturales</li>
                    <li onClick={() => setShow3(true)}>Banca y Seguros</li>
                </ul>
            </div>
        
        

       
            <div className="section1">
                <h3>Recursos Humanos</h3>
                  <div className="image1 imagen_4">
                      <img src={icgImage4}  alt="icg-image4" />
                  </div>
                <ul>
                    <li onClick={() => setShow4(true)}>Adiestramiento</li>
                    <li onClick={() => setShow5(true)}>Desarrollo Organizacional</li>
                </ul>
            </div>
       

       
            <div className="section1">
                <h3>Ranking Bancario</h3>
                  <div className="image1 imagen_3">
                      <img src={icgImage3}  alt="icg-image3" />
                  </div>
                  <ul>
                    <li onClick={() => setShow6(true)}>Ranking Bancario</li>
                    <li onClick={() => setShow7(true)}>Ranking Bancario Plus</li>
                  </ul>
            </div>
        </div>

        </div>

      <div className="svg-wave" style={{ height: "150px", overflow: "hidden", background: "white"}}>
         <svg
           viewBox="0 0 500 150"
           preserveAspectRatio="none"
           style={{ height: "100%", width: "100%" }}
         >
           <path
             d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
             style={{ stroke: "none", fill: "#eeeaea" }}
           ></path>
         </svg>
       </div>
       <div className="modal">
     
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Personas Jurídicas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado"> 
              <ul>
                <li>Estudios de factibilidad económica</li>
                <li>Estudios sectoriales</li>
                <li>Análisis de mercado</li>
                <li>Asesorías en alternativas de financiamiento</li>
                <li>Fusiones y adquisiciones</li>
                <li>Valoración de empresas</li>
                <li>Análisis de entorno</li>
                <li>Análisis de riesgo del negocio</li>
                <li>Defensa de la competencia</li>
                <li>Planificación estratégica</li>
                <li>Outsorcing en gerencia de crédito</li>
                <li>Gerencia de tesorería</li>
                <li>Deuda: Mercado de capitales, deuda bancaria.</li>
                <li>Financiamiento de proyectos</li>
                <li>Lineamientos fundamentales</li>
        
              </ul>
                </strong>
              <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
            </Modal>

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                style={{ maxWidth: "none"}}
                size="Small"
                centered
                
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Personas Naturales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="card1">
                <article className="conocenos">
                
                    <p>
                    <strong className="centrado">
                      <ul>
                        <li>Asesoría financiera para sucesión de
                        bienes</li>
                        <li>Manejo de patrimonio</li>
                        <li>Gerencia de portafolios de inversión</li>
                        <li>Asesoría bancaria y de seguros</li>
                        <li>Estructuración de fideicomisos</li>
                        <li>Estrategia financiera</li>
                      </ul>

                    </strong> 
                  <br /><br />


                    </p>
                    
                </article>
                </div>
                </Modal.Body>
      </Modal>

      <Modal
        show={show3}
        onHide={() => setShow3(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"><img src={icglogo} alt="icglogo" width="70px" margin-right="20px"/>Banca y Seguros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado">
                <ul>
                  <li>Outsorcing en gerencia de crédito</li>
                  <li>Gestión integral de riesgo</li>
                  <li>Desarrollo de planes estratégicos</li>
                  <li>Optimización de procesos</li>
                  <li>Análisis de cartera</li>
                  <li>Análisis del sistema financiera</li>
                </ul>
              
                  </strong> 
              <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show4}
        onHide={() => setShow4(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Adiestramiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado">
                <ul>
                  <li>Diseño de plan de adiestramiento, 
                  acorde al INCES</li>
                  <li>Identificación de necesidades de 
                  capacitación</li>
                  <li>Implementación de planes de 
                  adiestramiento</li>
                  <li>Capacitación personalizada</li>
                  <li>Eventos sobre temas actuales</li>
                </ul>
            </strong> 
              <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show5}
        onHide={() => setShow5(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="title-des" className="title-des"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Desarrollo Organizacional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado">
                <ul>
                  <li>Análisis y orientación del clima 
                  organizacional</li>
                  <li>Diseño de políticas, normas y 
                  procedimientos</li>
                  <li>Programas de desarrollo de carrera</li>
                  <li>Análisis, diseño y descripción de cargos</li>
                  <li>Análisis e implementación de 
                  evaluaciones de desempeño</li>
                  <li>Análisis y diseño de la estructura 
                  organizacional</li>
                  <li>Optimización de proceso</li>
                </ul>
                  </strong> 
             <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show6}
        onHide={() => setShow6(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Ranking Bancario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado">
              El Ranking Bancario tiene como finalidad presentar un análisis objetivo de la solidez y
estabilidad intrínseca de las instituciones financieras (IFs) que operan en Venezuela,
Utilizamos, como herramienta para la evaluación del análisis cualitativo y cuantitativo, la
metodología CAMEL y varios indicadores construidos a partir de la información
publicada por las propias instituciones financieras y por la Superintendencia de las
Instituciones del Sector Bancario (SUDEBAN).
                  </strong> 
             <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show7}
        onHide={() => setShow7(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="Small"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="title-plus"><img src={icglogo} alt="icglogo" width="70px" margin-right="100px"/>Ranking Bancario Plus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
           
              <p>
              <strong className="centrado">
              Incluye:
                <ul>
                  <li>Ranking bancario</li>
                  <li>Informe trimestral de la banca</li>
                  <li>Noticias económicas relevantes</li>
                  <li>2 participantes a cualquiera de nuestros eventos</li>
                </ul>
                  </strong> 
             <br /><br />


              </p>
              
          </article>
        </div>
        </Modal.Body>
      </Modal>
     </div>
    </Fragment>
  );
}

export default Servicios;
