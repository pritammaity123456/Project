import React, { Component } from 'react';

class FooterTemplate extends Component{
    render() {
        return (
            <div>

                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.0
                    </div>
                    <strong>Copyright &copy; 2018-2019 <a href="/">Pritam Maity</a>.</strong> All rights
                    reserved.
                </footer>

            </div>
        );
    }
}

export default FooterTemplate;