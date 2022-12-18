import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Armory.css";
import test from '/perfil_classes/orc1.png';
import Itemleft from '../components/item_left/Itemleft'; 
const Armory = () => {
  const [personagens, setPersonagens] = useState([]);
  const { nome } = useParams();
  const { classe } = useParams();
  const [head,setHead] =useState([]);
  const passa = () =>{
    sethead()
  }
  const getPersonagem = async () => {
    try {
      const resbuilda = await axios.get(
        `http://localhost:8080/classe/${classe}/${nome}`
      );
      const data = await resbuilda.data;
      setPersonagens(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPersonagem();
  }, [classe, nome]);

  return (

    <section className='max-w-5xl mx-auto h-screen'>
      {personagens.length === 0 ? (<p>Carregando Personagem</p>) : (
        personagens.map((build) => (
          <div key={build.id} >
            <article className='wrapper'>
              <div className='profile'>
                <div className='profile_img_info'>
                  <div className="img">
                    <img src={test} alt="profile_pic" />
                  </div>
                  <div className="info">
                    <h3 className="text-xl text-gray-200 font-normal md:font-bold ">Nome: {build.nome}</h3>
                    <p className="text-gray-200 font-bold">Raça: {build.raca}</p>
                    <p className="text-gray-200 font-bold">Classe: {build.classe}</p>
                    <p className="text-gray-200 font-bold">Talentos: {build.talents}</p>
                    <p className="text-gray-200 font-bold ">BUILD: {build.modalidade} - {build.build}</p>
                  </div>
                </div>
                <div className="profile_skills">
                    <Itemleft
                    h_head={build.item_head}
                    h_ench={build.item_ench}
                    h_gema_one={build.gem_one}
                    h_gema_two={build.gem_two}
                    h_foto={build.screen_head}
                    />
                </div>
                <div className="tags_wrap">
                  <span className="tag">web develop</span>
                </div>


              </div>
              <div className="profile_counts">
                lorem

              </div>
            </article>
          </div>

        ))
      )}
    </section>

  )
}

export default Armory