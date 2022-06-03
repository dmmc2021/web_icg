import React, { useState, useEffect } from "react";
import store from "../../firebase/firebase.js";
import Slider from "./../Slider/Slider.jsx";

export const Container = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    store
      .collection("noticia")
      .orderBy("fecha", "desc")
      .limit(9)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        
        setNoticias(documents);
      });
  }, [noticias]);
  

  return  <Slider noticias={noticias} />;
  
  
};

export default Container;
