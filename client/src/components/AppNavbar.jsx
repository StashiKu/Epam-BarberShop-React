import React, { PureComponent, Fragment } from 'react';

import AppointmentContainer from '../containers/AppointmentContainer'
import Menu from './Menu/Menu'

import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import { logoutUser } from '../actions/loginActions';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import './Auth/Styles.scss';

class AppNavbar extends PureComponent {
    state = {
        isOpen: false
    };
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isOpen } = this.state;
        const { isAuthenticated } = this.props
        return (
            <Fragment>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>SBS</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <AppointmentContainer />
                                </NavItem>
                                {isAuthenticated ? <Menu /> : 
                                <div className='d-flex'>
                                    <NavItem className='py-1 pl-2'>
                                        <Link to={'login'} className='reset'>
                                            LogIn
                                        </Link>
                                    </NavItem>
                                    <NavItem className='py-1 px-2'>
                                        <Link to={'signup'} className='reset'>
                                            SignUp
                                        </Link>
                                    </NavItem>
                                </div>}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
                    
const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: () => dispatch(loginUser),
    logoutUser: () => dispatch(logoutUser),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)
                               