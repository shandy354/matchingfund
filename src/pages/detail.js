import React, { Component } from "react";
import config from "../config/config";
import axios from "axios";

import Styles from "../components/styles/global.module.css";
import samplegam from "../assets/wel.jpg";
// import  DetilTanaman  from "../components/detil_tanaman";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_tanaman: [],
    };
  }
  // state = {
  //     post:{
  //         nama:'',
  //         kategori:'',
  //         lokasi: '',
  //         deskripsi: '',
  //         img: '',
  //     }
  // }
  componentDidMount() {
    const url = this.props.match.params.url;
    // const id = this.props.match.params.id;

    // axios.get(config.ROOT_URL + '/detil/tanaman/' + url)
    // axios.get(config.ROOT_URL + '/detil/item/' + id)
    axios
      .get(config.ROOT_URL + "/detil/" + url)

      .then((result) => {
        console.log("detil>>", result);
        // const item_tanaman = result.data.data;
        this.setState({
          item_tanaman: result.data.data,
        });
        // this.setState = ({ item_tanaman });
        // const post = result.data.data;
        // this.setState({
        //     post : {
        //         nama: post.nama,
        //         kategori: post.kategori,
        //         lokasi: post.lokasi,
        //         deskripsi: post.deskripsi,
        //         img: post.img,
        //     }
        // })
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className={Styles.row1}>
        {/* {this.state.item_tanaman(item_tanaman => <DetilTanaman image={config.ROOT_URL + '/public/' + item_tanaman.img}nama={item_tanaman.nama} lokasi={item_tanaman.lokasi} kategori={item_tanaman.kategori} deskripsi ={item_tanaman.deskripsi} />)} */}
        {/* {item_tanaman => <DetilTanaman image={config.ROOT_URL + '/public/' + this.state.item_tanaman.img} nama={this.state.item_tanaman.nama} lokasi={item_tanaman.lokasi} /> } */}
        <div className={Styles.detil_item}>
          <div>
            <img className={Styles.imgdetil} src={config.ROOT_URL + '/public/' + this.state.item_tanaman.img}alt="Gambar tanaman" />
          </div>
        </div>
        <div className={Styles.deskripsi}>
          <h2>{this.state.item_tanaman.nama}</h2>

          <h3>{this.state.item_tanaman.kategori}</h3>
          <h3>{this.state.item_tanaman.lokasi}</h3>
          <p>{this.state.item_tanaman.deskripsi}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
