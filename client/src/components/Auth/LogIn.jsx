import React, { PureComponent, Fragment } from 'react';

import { Form,
    Input,
    Label,
    Container,
    Button,
    Row,
    Col} from 'reactstrap';

import AppNavbar from '../AppNavbar'

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Styles.scss'

import { connect } from 'react-redux';
import { loginUser, addLoginProp } from '../../actions/loginActions';

class LogIn extends PureComponent {

    handleChangeMiddleware = (prop) => (event) => {
        const newCred = {
            [prop]: event.target.value
        }
        this.props.addCred(newCred);
    }

    handleSubmit = (event) => {
        const { login, userState} = this.props;
        event.preventDefault();
        login(userState);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={'/'} />
        } else {
            return(
                <Fragment>
                    <AppNavbar />
                    <Container>
                        <p className='text-center'>LogIn</p>
                        <Form className='d-flex flex-column align-items-center' onSubmit={this.handleSubmit}>
                            <Col className='col-6 mt-4'>
                                <Label for="username" className='col-form-label-lg'>username</Label>
                                <Input type="username" name="username" id="username" 
                                       className='form-control-lg' required
                                       placeholder="username" 
                                       onChange={this.handleChangeMiddleware('username')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Label for="password" className='col-form-label-lg'>Password</Label>
                                <Input type="password" name="password" id="password" 
                                       className='form-control-lg' required
                                       placeholder="Password"  
                                       onChange={this.handleChangeMiddleware('password')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Button className='btn-lg mr-3' type='submit'>LogIn</Button>
                                <span className='font'>or</span>
                                <Button className='btn-lg ml-3' 
                                        color='primary'>
                                        <Link to='/signup' className='reset'>SignUp</Link>
                                </Button>
                            </Col>
                        </Form>
                    </Container>
                </Fragment>
            )
        } 
    }
}
        
            

const mapStateToProps = (state) => ({
    userState: state.login.user,
    isAuthenticated: state.login.isAuthenticated,
})  

const mapDispatchToProps = (dispatch) => ({
    login: (creds) => dispatch(loginUser(creds)),
    addCred: (cred) => dispatch(addLoginProp(cred))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
                    