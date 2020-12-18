import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

class Banner extends React.Component {
   
    render() {
      return (
      <>
        <section className="position-relative">
        <div className="bg-overlay bg-primary opacity-65"></div>
            <div className="bg-overlay-content container-fluid">
                <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7 order-md-2 overflow-hidden">
                            <img src={this.props.imgsrc} alt="logo" className="d-block mx-auto"/>
                        </div>
                        <div className="col-lg-5 col-md-5 pt-4 pb-5 py-md-5">


                            <div className="mx-auto mr-lg-4 pl-xl-3 order-md-1 text-center text-md-left">
                                <h1 className="text-light mb-3">{this.props.bannertitle}</h1>

                                <p className="text-light font-size-lg">{this.props.subtitle}</p>

                                <div className="d-flex align-items-center justify-content-center justify-content-md-start pb-3 pb-xl-5 mb-5"><Link className="btn btn-primary mr-4" to="#">{this.props.btnname}</Link>
                                    <div className="d-flex align-items-center"><i className="fe-phone font-size-xl text-light mr-2"></i><Link className="text-light text-decoration-none" to="tel:+15262200459">+ 1 526 220 0459</Link></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <h2 className="h4 text-light mb-0 mr-4">Our<br/>Awards</h2>
                                    <div className="bg-light opacity-50 mr-4" ></div>
                                </div>
                                <div>
                                    <img width="72" src="img/demo/marketing-seo/hero/award-2.png" alt="Award"/>
                                </div>
                         </div>
                                                      
                           
                        </div>
                       
                </div>
            </div>
        </section>
      </>
      );
    }
  }
  
  export default Banner;