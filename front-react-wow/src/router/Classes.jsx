import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Classes.css";

const Classes = () => {
  const [posts, setPosts] = useState([]);
  const { classe } = useParams();

  const getPosts = async () => {
    try {
      const resposta = await axios.get(
        `http://localhost:8080/classe/${classe}`
      );
      const data = resposta.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, [classe]);
  return (
    <div className="container">
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="card_item" key={post.id}>
            <div className="card_inner">
              <img src={`/perfil_classes/${post.capa}`} alt="wow" />
              <div className="userName">{post.nome}</div>
              <div className="userUrl">{post.raca}</div>
              <div className="detail-box">
                <div className="gitDetail">
                  <span>{post.classe}</span><p>Classe</p>
                </div>
                <div className="gitDetail">
                  <span>{post.talents}</span><p>Talento</p>
                </div>
                <div className="gitDetail">
                  <span>{post.modalidade}</span><p>Modalidade</p>
                </div>
                <div className="gitDetail">
                  <span>{post.damage}</span><p>Damage</p>
                </div>
              </div>
              <button className="seeMore">Ver mais</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Classes;
