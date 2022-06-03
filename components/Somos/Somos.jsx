import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import icgLogo from "../../img/icgLogo.png";
import { AiFillBank } from "react-icons/ai";



function Somos() {
 
  const [show, setShow]=useState(null)


  return (
    <div className="somos_body">

        <div className="somos_title" id="somos">
            <h3>Nuestro Equipo de Trabajo</h3>
            <p>
            Nuestro equipo multidisciplinario y años de experiencia en el área de
adiestramiento nos permiten formar diversos equipos de trabajo y ofrecer
consultorías especializadas, según sean las necesidades del cliente
            </p>
        </div>
    <div className="flex_a">
        
        <div className="fond">
        
        
        <div className="carreaux_presentation_light_1">
            <div className="shadow_swhow_mini">
                <div className="deroul_titre">Nombre Apellido</div>
                <div className="deroul_soustitre">Cargo</div>
            </div>
        </div>
        
        
        <div className="pure_css">EJECUTIVO 1 <font className="font_style"></font></div>
                <a href="http://www.quienes.com/code" target="parent"><div className="quienes">link informativo</div></a>
        </div>

        <div className="fond">
        
        
        <div className="carreaux_presentation_light_2">
            <div className="shadow_swhow_mini">
                <div className="deroul_titre">José Grasso</div>
                <div className="deroul_soustitre">Director Ejecutivo</div>
            </div>
        </div>
        
        
        <div className="pure_css">EJECUTIVO 2 <font className="font_style"></font></div>
                <div className="quienes" onClick={() => setShow(true)}>link informativo</div>
        </div>

        <div className="fond">
        
        
        <div className="carreaux_presentation_light_3">
            <div className="shadow_swhow_mini">
                <div className="deroul_titre">Nombre Apellido</div>
                <div className="deroul_soustitre">Cargo</div>
            </div>
        </div>
        
        
        <div className="pure_css">EJECUTIVO 3 <font className="font_style"></font></div>
                <a href="http://www.quienes.com/code" target="parent"><div className="quienes">link informativo</div></a>
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
        size="Small"
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
              <strong id="centrado">José Grasso Vecchio</strong> 
              Ha ocupado diversos cargos gerenciales y de dirección en importantes empresas del sector
financiero nacional e internacional , con más de 30 años de experiencia profesional.<br /><br />


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

export default Somos;
