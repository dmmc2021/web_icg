import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import icgImage1 from "../../img/icg-image1.jpg";
import icgLogo from "../../img/icgLogo.png";
import { AiFillBank } from "react-icons/ai";


function IcgInfo() {
 
  const [show, setShow]=useState(null)


  return (
    
    
       <div>

        <div className="flex_a icg_info" id="icg-info">
            <div className="section1">
                <h3>ICG Consultores</h3>
                <article> Somos una empresa de consultoría, anteriormente Softline Consultores Gerenciales, conformada por un grupo de especialistas con más de 25 años de experiencia en el mercado venezolano y latinoamericano, para ofrecer la más amplia variedad de productos y servicios de adiestramiento, consultoría en las áreas de banca, finanzas, recursos humanos e imagen corporativa. Igualmente contamos con un servicio de ranking bancario y publicaciones de carácter económico y financiero.
               </article>
               
               <div className="btn-imp">
                  <input type="submit" className="cta boton" value="+Info" onClick={() => setShow(true)} />
               </div>

            </div>
            <div className="image1 imagen_1">
                <img src={icgImage1}  alt="icg-image1" />
            </div>
            
        </div>
         
         <div className="svg-wave" style={{ height: "150px", overflow: "hidden", background: "#eeeaea"}}>
         <svg
           viewBox="0 0 500 150"
           preserveAspectRatio="none"
           style={{ height: "100%", width: "100%" }}
         >
           <path
             d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
             style={{ stroke: "none", fill: "white" }}
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
        size="xl"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
            <img src={icgLogo} alt="logo-ilap" width="120px" />
              <p>
              <strong id="centrado">Misión</strong> 
              Ser la Empresa de consultoría líder tanto en Venezuela como en los mercados de Latinoamérica. Ofrecer los mejores productos y servicios gerenciales con la finalidad de aumentar las oportunidades de negocio de nuestros clientes. Ser el mejor aliado estratégico en materia de formación profesional, información financiera e imagen corporativa.<br /><br />

<strong id="centrado">Visión</strong>

Impulsar el desarrollo y crecimiento del capital humano y financiero de las empresas, así como garantizar el éxito y permanencia en el mercado de las organizaciones venezolanas y latinoamericanas a través de la orientación en la toma de decisiones y manejo de información adaptada a las necesidades del cliente.<br /> <br />

<strong id="centrado">Responsabilidad Social</strong> 

A través de un acto que trasciende la necesidad de proyección de imagen institucional y la pura filantropía, asumimos la responsabilidad, hoy más que nunca ineludible, de brindar mejoras en la calidad de vida y bienestar para los ciudadanos, estableciendo una alianza estratégica con la Asociación Venezolana para el Síndrome de Down (AVESID), para prestar todo el apoyo necesario para la realización de sus actividades y formación profesional de su personal. <br /><br />

              </p>
              <AiFillBank className="icono" />
          </article>
        </div>
        </Modal.Body>
      </Modal>
     
    
     
      </div>
       </div>

        

    
  );
}

export default IcgInfo;
