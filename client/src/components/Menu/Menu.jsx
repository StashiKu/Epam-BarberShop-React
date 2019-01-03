import React, { PureComponent, Fragment} from 'react';

import { ButtonDropdown, 
         DropdownToggle, 
         DropdownMenu, 
         DropdownItem } from 'reactstrap';

import { logoutUser } from '../../actions/loginActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Menu extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }
        
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logoutUser = () => {
        this.props.logoutUser()
    }

    render() {
        return (
            <Fragment>
                <ButtonDropdown isOpen={this.state.dropdownOpen} 
                                toggle={this.toggle}
                                className='ml-2'>
                <DropdownToggle caret>
                   Жмяк
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Link to="account">
                            Personal
                        </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.logoutUser}>LogOut</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
            </Fragment>
        );
    }
}
                
const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)