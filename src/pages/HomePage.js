import React, {Component} from 'react';
import HeaderTemplate from "../template/HeaderTemplate";
import SidebarTemplate from '../template/SidebarTemplate';
import FooterTemplate from '../template/FooterTemplate';

class HomePage extends Component {
  render() {
    return (
      <div>
          <HeaderTemplate/>
          <SidebarTemplate/>
          <div className="content-wrapper">

              <section className="content-header">
                  <h1>
                      Home Page
                      <small>advanced tables</small>
                  </h1>
                  <ol className="breadcrumb">
                      <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                      <li><a href="#">Tables</a></li>
                      <li className="active">Data tables</li>
                  </ol>
              </section>

          </div>
          <FooterTemplate />
      </div>
    );
  }
}
export default HomePage;
