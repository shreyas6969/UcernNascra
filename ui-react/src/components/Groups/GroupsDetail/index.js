import React, { Component } from 'react';

import Sidebar from './../../Sidebar'
import Header from './../../Header'

class GroupsDetail extends Component {
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
                          <li className="breadcrumb-item"><a href="/groups">Groups</a></li>
                          <li className="breadcrumb-item active">Groups {this.props.match.params.id}</li>
                      </ol>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GroupsDetail
