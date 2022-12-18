import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "../components/card/Card";



const Classes = () => {
  const [posts, setPosts] = useState([]);
  const { classe } = useParams();

  const getPosts = async () => {
    try {
      const resposta = await axios.get(
        `http://localhost:8080/classe/${classe}`
      );
      const data = await resposta.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, [classe]);
  return (
    <main className="container sm-auto py-10 px-20">
      <div className="grid lg:grid-cols-3 gap-6">
      {posts.length === 0 ? ( <p>Carregando...</p>) : (
        posts.map((post) => (
        <a key={post.id} href={`/classes/${post.classe}/${post.nome}`}>
          <Card 
          nome={post.nome}
          capa={post.capa}
          raca={post.raca}
          classe={post.classe}
          talents={post.talents}
          modalidade={post.modalidade}
          build={post.build}
          damage={post.damage}

          
          />
        </a>   
        ))
      )}
        </div>
    </main>
  );
};

export default Classes;
