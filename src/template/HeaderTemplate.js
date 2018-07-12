import React, { Component } from 'react';

class HeaderTemplate extends Component {

    render() {
        return (
            <div>

                <header className="main-header">

                    <a href="/" className="logo">

                        <span className="logo-mini"><b>H</b>CM</span>

                        <span className="logo-lg"><b>Home</b>Claim</span>
                    </a>

                    <nav className="navbar navbar-static-top">

                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>

                        <div className="navbar-custom-menu">

                        </div>
                    </nav>
                </header>

                <aside className="main-sidebar">

                    <section className="sidebar">

                        <div className="user-panel">
                            <div className="pull-left image">

                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>

                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                        className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>

                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="/claim"><i className="fa fa-circle-o"></i> Claim</a></li>
                                    <li><a href="/payment"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>

                        </ul>
                    </section>

                </aside>
            </div>

        );
    }

}

export default HeaderTemplate;