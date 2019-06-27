import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
            <Link to='/' style={{textDecoration:'none', color:'white'}}>
          <NavbarBrand>Latihan React</NavbarBrand>

            </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>{this.props.count}</NavLink>
                </NavItem>
              <NavItem>
              <Link to='/todo' style={{textDecoration:'none', color:'white'}}>
                <NavLink>Todo</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                  <Link to='/reduxpage'>
                <NavLink>Redux</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                  <Link to='/wordcount'>
                <NavLink>CountWord [{this.props.word}]</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                  <Link to='/wilayah'>
                <NavLink>Wilayah</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapSateToProps = (state) => {
    return{
        count: state.angka.count,
        word: state.word.count
    }
}
export default connect(mapSateToProps) (Header);

