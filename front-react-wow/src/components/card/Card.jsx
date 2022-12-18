import React from 'react'

const Card = ({nome,capa,raca,classe,talents,modalidade,build,damage}) => {
  return (
    <main>
      <div>
        <article className={"shadow-white rounded-lg border-2 border-indigo-100 p-3 hover:bg-slate-600 transition-all duration-200"}>
        <img className="rounded-lg " src={`/perfil_classes/${capa}`} alt="wow"/>
        <h3 className="text-xl text-white font-normal md:font-bold mt-2">Nome: {nome}</h3>
        <p className="text-slate-400">Raça:{raca}</p>
        <p className="text-slate-400">Classe:{classe}</p>
        <p className="text-slate-400">Talentos:{talents}</p>
        <p className="text-slate-400">BUILD:{modalidade} - {build}</p>
        <p className= "text-2xl text-white font-normal md:font-bold mt-1">DPS: {damage}</p> 
        </article>
      </div>
    </main>
  )
}

export default Card