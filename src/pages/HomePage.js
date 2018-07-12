import React, {Component} from 'react';
import HeaderTemplate from "../template/HeaderTemplate";
import FooterTemplate from '../template/FooterTemplate';

class HomePage extends Component {
  render() {
    return (
      <div>
          <HeaderTemplate/>
          <FooterTemplate />
      </div>
    );
  }
}
export default HomePage;
