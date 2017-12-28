import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Sidebar from './../Sidebar'
import Header from './../Header'
import Footer from './../Footer'

class Groups extends Component {
  render() {
    return (
      <div>
       <Sidebar />
       <div className="page-container ">
         <Header />
         <div className="page-content-wrapper full-height">
            <div className="content full-height">

              <div className=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                  <div className="inner">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/">Home</a></li>
                          <li className="breadcrumb-item active">Groups</li>
                      </ol>
                  </div>
              </div>

              <div className="card card-transparent">
                 <div className="m-0 row card-block">
                    <div className="col-lg-12 sm-no-padding">

                    <div className="card social-card share m-3 col1" data-social="item">
                       <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
                       </div>
                       <div className="card-header clearfix">
                          <div className="user-pic">
                             <img alt="Profile Image" width="33" height="33" data-src-retina="assets/img/profiles/mikenill.jpg" data-src="assets/img/profiles/mikenill.jpg" src="assets/img/profiles/mikenill.jpg" />
                          </div>
                          <h5>Mike Neill</h5>
                          <h6>Conversations Place</h6>
                       </div>
                       <div className="card-description">
                          <p>Inspired by : good design is obvious, great design is transparent</p>
                          <div className="via">via themeforest</div>
                       </div>
                       <div className="card-content">
                          <ul className="buttons ">
                             <li>
                                <Link to={{ pathname: '/groups/1' }}><i className="fa fa-expand"></i></Link>
                             </li>
                             <li>
                                <a href="#"><i className="fa fa-heart-o"></i>
                                </a>
                             </li>
                          </ul>
                          <img alt="Social post" src="assets/img/profiles/mikenill.jpg" />
                       </div>
                       <div className="card-footer clearfix">
                          <div className="time"><span>1033 </span>Followers</div>
                       </div>
                    </div>



                    <div className="card social-card share m-3 col1" data-social="item">
                       <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
                       </div>
                       <div className="card-header clearfix">
                          <div className="user-pic">
                             <img alt="Profile Image" width="33" height="33" data-src-retina="assets/img/profiles/mikenill.jpg" data-src="assets/img/profiles/mikenill.jpg" src="assets/img/profiles/mikenill.jpg" />
                          </div>
                          <h5>Mike Neill</h5>
                          <h6>Conversations Place</h6>
                       </div>
                       <div className="card-description">
                          <p>Inspired by : good design is obvious, great design is transparent</p>
                          <div className="via">via themeforest</div>
                       </div>
                       <div className="card-content">
                          <ul className="buttons ">
                             <li>
                                <Link to={{ pathname: '/groups/2' }}><i className="fa fa-expand"></i></Link>
                             </li>
                             <li>
                                <a href="#"><i className="fa fa-heart-o"></i>
                                </a>
                             </li>
                          </ul>
                          <img alt="Social post" src="assets/img/profiles/cerner-cover.jpg" className="space-cover"/>
                       </div>
                       <div className="card-footer clearfix">
                          <div className="time"><span>1033 </span>Followers</div>
                       </div>
                    </div>
                    </div>
                 </div>
              </div>

            </div>
           <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Groups
