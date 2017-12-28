import React, { Component } from 'react';

import Sidebar from './../Sidebar'
import Header from './../Header'
import Footer from './../Footer'
import './index.css'

class MyBlogs extends Component {
  render() {
    return (
      <div>
        <Sidebar />

        <div className="page-container ">
          <Header />

          <div className="page-content-wrapper full-height">
            <div className="content full-height">


              <nav className="secondary-sidebar light">
                <div className=" m-b-30 m-l-30 m-r-30 hidden-sm-down">
                  <a href="email_compose.html" className="btn btn-primary btn-block btn-compose">Create Blog</a>
                </div>
                <p className="menu-title">BROWSE</p>
                <ul className="main-menu">
                  <li className="active">
                    <a href="#">
                      <span className="title"><i className="fa fa-user-circle"></i> Authored</span>
                      <span className="badge pull-right">5</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      <span className="title"><i className="pg-folder"></i> Drafts</span>
                    </a>
                    <ul className="sub-menu no-padding">
                      <li>
                        <a href="#">
                          <span className="title">Following</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="title">Labeled</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="title"><i className="fa fa-users"></i> Following</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="title"><i className="fa fa-eye"></i> Reviewed</span>
                      <span className="badge pull-right">10</span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="inner-content full-height">
                <div className="split-view">

                  <div className="split-list">
                    <a className="list-refresh" href="#"><i className="fa fa-refresh"></i></a>
                    <div data-email="list" className=" boreded no-top-border">


                    </div>
                  </div>


                  <div data-email="opened" className="split-details">
                    <div className="no-result">
                      <h1>No Blog found</h1>
                    </div>
                    <div className="email-content-wrapper" style={{display:'none'}}>
                      <div className="actions-wrapper menuclipper bg-master-lightest">
                        <ul className="actions menuclipper-menu no-margin p-l-20 ">
                          <li className="hidden-lg-up">
                            <a href="#" className="split-list-toggle"><i className="fa fa-angle-left"></i> All Inboxes</a>
                          </li>
                          <li className="no-padding "><a href="#" className="text-info">Reply</a>
                          </li>
                          <li className="no-padding "><a href="#">Reply all</a>
                          </li>
                          <li className="no-padding "><a href="#">Forward</a>
                          </li>
                          <li className="no-padding "><a href="#">Mark as read</a>
                          </li>
                          <li className="no-padding "><a href="#" className="text-danger">Delete</a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <div className="email-content">
                        <div className="email-content-header">
                          <div className="thumbnail-wrapper d48 circular bordered">
                            <img width="40" height="40" alt="" data-src-retina="assets/img/profiles/avatar2x.jpg" data-src="assets/img/profiles/avatar.jpg" src="assets/img/profiles/avatar2x.jpg"/>
                          </div>
                          <div className="sender inline m-l-10">
                            <p className="name no-margin bold">
                            </p>
                            <p className="datetime no-margin"></p>
                          </div>
                          <div className="clearfix"></div>
                          <div className="subject m-t-20 m-b-20 semi-bold">
                          </div>
                          <div className="fromto">
                            <div className="pull-left">
                              <div className="btn-group dropdown-default">
                                <a className="btn dropdown-toggle btn-small btn-rounded" data-toggle="dropdown" href="#">
                                      David Nester
                                      </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Friend</a>
                                  <a className="dropdown-item" href="#">Report</a>
                                </div>
                              </div>
                              <label className="inline">
                                <span className="muted">&nbsp;&nbsp;to</span>
                                <span className=" small-text">johnsmith@skyace.com</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="email-content-body m-t-20">
                        </div>
                        <div className="wysiwyg5-wrapper b-a b-grey m-t-30">
                          <textarea className="email-reply" placeholder="Reply"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="compose-wrapper hidden-md-up">
                    <a className="compose-email text-info pull-right m-r-10 m-t-10" href="email_compose.html"><i className="fa fa-pencil-square-o"></i></a>
                  </div>

                </div>
              </div>
             
            </div>
           <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default MyBlogs;
