// import React, { Component } from "react";

import { Link } from "react-router-dom";
import Styles from "../components/styles/global.module.css";

const ItemTanaman = (props) => {
  return (
    <div className={Styles.item_tanaman}>
      <div>
        <img src={props.image} alt={props.nama} />
        <h2>{props.nama}</h2>
        <h3>{props.kategori}</h3>
        <Link to={"/item/" + props.action}>Detil</Link>
        {/* <Link to={"/detil-tanaman/" + props.goDetil.id}>Detil</Link> */}
        {/* <h4 onClick={()=>props.goDetil(props.id)}>Detil</h4> */}
      </div>
    </div>
  );
};
export default ItemTanaman;
