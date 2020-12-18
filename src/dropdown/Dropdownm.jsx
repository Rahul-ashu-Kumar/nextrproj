import React from 'react';
import { NavLink } from 'react-router-dom';

class Dropdownm extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown nav-link" onClick={this.toggleOpen}>
        
            Dropdown
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" exact to="/nogo">
              Item 1
            </NavLink>
            <NavLink className="dropdown-item" exact to="nogo">
              Item 2
            </NavLink>
            <NavLink className="dropdown-item" exact to="/nogo">
              Item 3
            </NavLink>
          </div>
        </div>
      );
    }
  }
  
  export default Dropdownm;