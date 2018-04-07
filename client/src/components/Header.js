import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Reachout
          </a>
          <ul className="right">
            <li>
              <a href='/auth/google'>Login With Google</a>
            </li>
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
