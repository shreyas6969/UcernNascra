import React, { Component } from 'react';

import Sidebar from './../Sidebar'
import Header from './../Header'
import Footer from './../Footer'
import BlockPost from './../BlockPost'
import NavigationCard from './../NavigationCard'

class NewsFeed extends Component {
  render() {
    return (
      <div>
        <Sidebar />

        <div className="page-container">
            <Header />
            <div className="page-content-wrapper">
                <div className="content">

                    <div className="jumbotron" data-pages="parallax">
                        <div className=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                            <div className="inner">

                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">News Feed</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid container-fixed-lg">
                        <div className="row">
                          <BlockPost name={"Shahbaz Khan"} body={"Somebody posted a comment"} className={"fa fa-rss"}/>
                          <BlockPost name={"Kartheek Alluvada"} className={"fa fa-sticky-note-o"} body={"One stop team to take care of all your Capital Spend and IT Assets” ITSSM is a Strategy and Service Management team under the broader Cerner Technology Services unit at Cerner India. Cerner India ITSSM team comprises of 2 major verticals: IT Business Management: Comprising of IT Capital & Expense Planning, Hardware ..."}/>
                          <BlockPost name={"Syed Hussain"} className={"fa fa-comments-o"} body={"Somebody posted a comment"}/>
                          <BlockPost name={"Shreyas V"} className={"fa fa-rss"} body={"Somebody posted a comment"}/>
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

export default NewsFeed;
