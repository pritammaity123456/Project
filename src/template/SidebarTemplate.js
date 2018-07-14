import React, { Component } from  'react';

class SidebarTemplate extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">

                    <section className="sidebar">

                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>

                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input name="q" className="form-control" placeholder="Search..." type="text"/>
                                  <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                        className="fa fa-search"></i>
                                    </button>
                                  </span>
                            </div>
                        </form>

                        <ul className="sidebar-menu tree" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview menu-open">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li className="active"><a href="/claim"><i
                                        className="fa fa-circle-o"></i> Claim</a></li>
                                    <li><a href="/payment"><i className="fa fa-circle-o"></i> Payment</a></li>
                                </ul>
                            </li>
                            <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i>
                                <span>Documentation</span></a></li>
                            <li className="header">LABELS</li>
                            <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a>
                            </li>
                        </ul>
                    </section>

                </aside>
            </div>
        );
    }
}

export default SidebarTemplate;