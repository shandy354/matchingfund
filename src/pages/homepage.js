import React, { Component } from "react";
import Styles from "../components/styles/global.module.css";
import peta from "../assets/peta.png";
import toga from "../assets/toga1.jpg";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`${Styles.wrapper} ${Styles.banner}`}></div>
        <div className={Styles.wrapper}>
          <div className={Styles.row}>
            <div className={Styles.grid}>
              <div className={Styles.des}>
                <img className={Styles.des1} src={peta} alt="des" />
              </div>
              <div className={Styles.des2}>
                <p>
                  <h1>Kabupaten Kediri . . </h1>
                  Secara geografis, Kabupaten Kediri terletak antara 111º 47’
                  05” sampai dengan 112º 18’ 20” Bujur Timur dan 7º 36’ 12”
                  sampai dengan 8º 0’ 32” Lintang Selatan. Kabupaten Kediri
                  terdiri dari 26 kecamatan Informasi tempat budidaya tanaman
                  obat keluarga (TOGA) dan tanaman herbal yang ada di Kabupaten
                  Kediri telah kami rangkum dalam website ini. Anda bisa
                  menemukan berbagi macam tanaman herbal hanya disini
                </p>
              </div>
            </div>
            <div className={Styles.grid}>
              <div className={Styles.des2}>
                <p>
                  <h1>Tanaman Obat . . </h1>
                  Tanaman obat adalah segala jenis tumbuhan yang diketahui
                  mempunyai khasiat baik dalam membantu memelihara kesehatan
                  maupun pengobatan suatu penyakit. Tumbuhan obat sangat erat
                  kaitannya dengan pengobatan tradisional, karena sebagian besar
                  pendayagunaan tumbuhan obat belum didasarkan pada pengujian
                  klinis laboratorium, melainkan lebih berdasarkan pada
                  pengalaman penggunaan
                </p>
              </div>
              <div className={Styles.des}>
                <img className={Styles.des1} src={toga} alt="des" />
              </div>
            </div>
          </div>
          <div className={Styles.copyright}>@Copyright2027</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
