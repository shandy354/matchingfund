// import React, { Component } from "react";

// import { Link } from "react-router-dom";
import Styles from "../components/styles/global.module.css";

const DetilTanaman = (props) => {

  return (
           <div>
            <div className={Styles.detil_item}>
            <div>
              <img src={props.image} alt={props.nama}/>
            </div>
          </div>
          <div className={Styles.deskripsi}>
            <h2>{props.nama}</h2>

            <h3>{props.kategori}</h3>
            <h3>{props.lokasi}</h3>
            <p>{props.deskripsi}</p>
          </div>
           </div>
           
    // <div className={Styles.item_tanaman}>
    //   <div>
    //     <img src={props.image} alt={props.nama} />
    //     <h2>{props.nama}</h2>
    //     <h3>{props.kategori}</h3>
    //     <Link to={'/item/' + props.action}>Detil</Link>
    //   </div>
    // </div>
  );
};

export default DetilTanaman;
