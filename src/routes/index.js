import React from "react";
import {Route,Switch} from "react-router-dom";

import Homepage from "../pages/homepage";
import DaftarTanaman from "../pages/daftartanaman";
import Tentang from "../pages/tentang";
import Detail from "../pages/detail";
import Navbar from "../components/navbar";

const Routes = () => {
    return(
        <div>
            <Navbar/>
                <Switch>
                <Route path="/" exact component = {Homepage}/>
                <Route path="/daftartanaman" exact component = {DaftarTanaman}/>
                {/* <Route path ="/detil-tanaman/:url" component ={Detail}/> */}
                <Route path="/tentang" exact component ={Tentang}/>
                <Route path="/item/:url"  component ={Detail}/>
                {/* <Route path="/deti-item/:id" component ={Detail}/> */}
                </Switch>
        </div>
    )
}
export default Routes;