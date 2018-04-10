import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return 'still deciding'
      case false:
        return <li>
                <a href='/auth/google'>Login With Google</a>
              </li>
      default:
        return [
              <li key="1"><Payments/></li>,
              <li key="2">
                <a href='/api/logout'>Logout</a>
              </li>
            ];
    }
  }
  render() {
    console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <a href='/' className="left brand-logo">
            Reachout
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
 }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
