import React from 'react';
import hangsgrohe from "../../../assets/collaborators/hangsgrohe.png";
import grohe from "../../../assets/collaborators/grohe.png";
import stowk from "../../../assets/collaborators/stowk.png";
import col_5 from "../../../assets/collaborators/col_5.png";
import cersanit from "../../../assets/collaborators/cersanit.png";
import geberit from "../../../assets/collaborators/geberit.png";
import roca from "../../../assets/collaborators/roca.png";
import vitra from "../../../assets/collaborators/vitra.png";
import villeroy from "../../../assets/collaborators/villeroy.png";
import ideal_standard from "../../../assets/collaborators/ideal_standard.png";
import aquanika from "../../../assets/collaborators/aquanika.png";
import benetto from "../../../assets/collaborators/benetto.png";
import colombo from "../../../assets/collaborators/colombo.png";
import dyson from "../../../assets/collaborators/dyson.png";
import gorenje from "../../../assets/collaborators/gorenje.png";
import jado from "../../../assets/collaborators/jado.png";
import lvi from "../../../assets/collaborators/lvi.png";
import am_pm from "../../../assets/collaborators/am_pm.png";
import "./collaborators.scss";

function Collaborators(props) {
  const collaborators = [
    {
      id : "1",
      img : hangsgrohe,
    },
    {
      id : "2",
      img : grohe,
    },
    {
      id : "3",
      img : stowk,
    },
    {
      id : "4",
      img : col_5,
    },
    {
      id : "5",
      img : cersanit,
    },
    {
      id : "6",
      img : geberit,
    },
    {
      id : "7",
      img : roca,
    },
    {
      id : "8",
      img : vitra,
    },
    {
      id : "9",
      img : villeroy,
    },
    {
      id : "10",
      img : ideal_standard,
    },
    {
      id : "11",
      img : aquanika,
    },
    {
      id : "12",
      img : benetto,
    },
    {
      id : "13",
      img : colombo,
    },
    {
      id : "14",
      img : dyson,
    },
    {
      id : "15",
      img : gorenje,
    },
    {
      id : "16",
      img : jado,
    },
    {
      id : "17",
      img : lvi,
    },
    {
      id : "18",
      img : am_pm,
    }
  ]
  return (
    <div className='collaborators'>
      {collaborators.map((item) => (
        <div className="collaborators_card" key={item.id}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Collaborators;