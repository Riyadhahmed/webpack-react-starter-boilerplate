import React, {Component} from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Services from "./common/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Services/>
                <Footer/>
            </div>
        );
    }
}
