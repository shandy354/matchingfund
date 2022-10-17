import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";

// import qs from 'querystring';
import config from "../config/config";
import Styles from "../components/styles/global.module.css";
import ItemTanaman from "../components/item_tanaman";

// const api = 'http://localhost:3001'
// import gambar from "../assets/wel.jpg";
// import gambar1 from "../assets/peta.png";

class DaftarTanaman extends Component {
  state = {
    item:[]
  }
  getApi = () => {
    axios.get(config.ROOT_URL + "/tanaman/item")
    .then((result) => {
      console.log("produk tnaman >>", result);
      // const item = result.data.data;
      // this.setState({ item });
      this.setState({
        item:result.data.data 
      })
    });
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     item: [],
  //   };
  // }
  // handleDetil = (id) => {
  //   this.props.item.push(`/detil-tanaman/${id}`);
  // }

  componentDidMount() {
    // axios.get(config.ROOT_URL + "/tanaman/item").then((result) => {
    //   console.log("produk tnaman >>", result);
    //   // const item = result.data.data;
    //   // this.setState({ item });
    //   this.setState({
    //     item:result.data.data 
    //   })
    // });
    this.getApi();
  }

  render() {
    return (
      <React.Fragment>
        <div className={`${Styles.wrapper} ${Styles.banner}`}></div>
        <div className={Styles.wrapper}>
          <div className={Styles.rows}>
            <div className={Styles.cards}>
              <div className={Styles.input}>
                <input type="search" placeholder="Cari Tanaman" />
                <button>Cari</button>
              </div>
            </div>
          </div>
          <div className={Styles.rows}>
            <div className={Styles.grid_tanaman}>
              {this.state.item.map((item) => (
                <ItemTanaman
                  key ={item.id}
                  image={config.ROOT_URL + "/public/" + item.img}
                  nama={item.nama}
                  kategori={item.kategori}
                  // action={item.url}
                  action ={item.url}
                />
              ))}
              {/* <ItemTanaman image={gambar}nama="cNama Tanaman" action ="link_detail" />
              <ItemTanaman image={gambar1}nama="Nama Tanaman1" action ="link_detail1"/>
              <ItemTanaman image={gambar}nama="Nama Tanaman" action ="link_detail2"/>
              <ItemTanaman image={gambar}nama="Nama Tanaman2" action ="link_detail3"/>
              <ItemTanaman image={gambar1}nama="Nama Tanaman" action ="link_detail4"/>
              <ItemTanaman image={gambar}nama="Nama Tanaman" action ="link_detail5"/>
              <ItemTanaman image={gambar}nama="Nama Tanaman" action ="link_detail6"/> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DaftarTanaman;
