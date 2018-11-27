import React from "react";
import cardImg01 from "../../assets/images/webpack_react.jpeg";
import cardImg02 from "../../assets/images/webpack_react_new.jpeg";
import cardImg03 from "../../assets/images/small.png";

const Services = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={cardImg01}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and
                            make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={cardImg02}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and
                            make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={cardImg03}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and
                            make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
