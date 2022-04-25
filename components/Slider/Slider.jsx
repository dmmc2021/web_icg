/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Modal from "react-bootstrap/Modal";
import Noticia from "../Noticia/Noticia.jsx";
import icglogo from "../../img/icg_logo.jpg";
// eslint-disable-next-line
export default (props) => {
  
  //({noticias}) => {

  const [show, setShow] = useState(null);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const handlerViewNoticia = (noticia) => {
    setShow(true);
    setNoticiaSeleccionada(noticia);
  };

  const [sizeArray, setSizeArray] = useState(props.noticias.length);
  // eslint-disable-next-line
  useEffect(() => {
    setSizeArray(props.noticias.length);
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: sizeArray / sizeArray,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <section className="info-last" id="noticia-id">
        <div className="contenedor">
          <h2 className="titulo">NOTICIAS</h2>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {props.noticias.map((noticia, index) => (
                // eslint-disable-next-line
                <div key={index} className="keen-slider__slide item-slide">
                 {
                 // eslint-disable-next-line max-len
                 }
                  <img
                    className="slide-img"
                    src={noticia.image}
                  />
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="btn-slide"
                    style={{fontWeight:"bold"}}
                    //onClick={() => setShow(true)}
                    onClick={() => handlerViewNoticia(noticia)}
                  >
                    {noticia.titulo}
                  </Button>
                </div>
              ))}
              <div className="ventana">
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                  style={{ maxWidth: "none" }}
                  size="xl"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title" style={{fontSize:"1.8em"}}>
                    <img src={icglogo} alt="icglogo" width="100px" margin-right="200px"/>NOTICIA DEL DIA
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Noticia noticia={noticiaSeleccionada} />
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            {slider && (
              <>
                <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === 0}
                />
                <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === slider.details().size - 3}
                />
              </>
            )}
          </div>
          {slider && (
            <div className="dots">
              {[...Array(sizeArray > 2 ? sizeArray - 2 : 0).keys()].map(
                (idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
