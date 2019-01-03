import React, { PureComponent, Fragment} from 'react';

import { Form,
         Input,
         Label,
         Container,
         Button,
         Col } from 'reactstrap';

import AppNavbar from '../AppNavbar'

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './Styles.scss';

import { connect } from 'react-redux';
import { signUpUser, addSignUpProp } from '../../actions/signUpActions';

class SignUp extends PureComponent {

    handleChangeMiddleware = (prop) => (event) => {
        const newCred = {
            [prop]: event.target.value
        }
        this.props.addCred(newCred);
    }

    handleSubmit = (event) => {
        const { signUpUser, userState} = this.props;
        event.preventDefault();
        signUpUser(userState);
    }

    render() {
        if (this.props.isAutherised) {
            return <Redirect to={'login'} /> 
        } else {
            return(
                <Fragment>
                    <AppNavbar />
                    <Container>
                        <p className='text-center'>SignUp</p>
                        <Form className='d-flex flex-column align-items-center' onSubmit={this.handleSubmit}>
                            <Col className='col-6 mt-4'>
                                <Label for="name" className='col-form-label-lg'>Username</Label>
                                <Input type="name" name="name" id="name" 
                                    className='form-control-lg'
                                    placeholder="username" required 
                                    onChange={this.handleChangeMiddleware('username')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Label for="name" className='col-form-label-lg'>FullName</Label>
                                <Input type="fullname" name="fullname" id="fullname" 
                                    className='form-control-lg'
                                    placeholder="fullname" required 
                                    onChange={this.handleChangeMiddleware('fullname')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Label for="email" className='col-form-label-lg'>Email</Label>
                                <Input type="email" name="email" id="email" 
                                    className='form-control-lg' required
                                    placeholder="email" 
                                    onChange={this.handleChangeMiddleware('email')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Label for="password" className='col-form-label-lg'>Password</Label>
                                <Input type="password" name="password" id="password" 
                                    className='form-control-lg' required
                                    placeholder="password"  
                                    onChange={this.handleChangeMiddleware('password')}/>
                            </Col>
                            <Col className='col-6 mt-4'>
                                <Button className='btn-lg mr-3' type='submit'>SignUp</Button>
                                <span className='font'>or</span>
                                <Button className='btn-lg ml-3' 
                                        color='primary'>
                                        <Link to='/login' 
                                            className='reset'>
                                            LogIn
                                        </Link>
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
    userState: state.signUp.user,
    isAutherised: state.signUp.isAutherised
})  

const mapDispatchToProps = (dispatch) => ({
    signUpUser: (creds) => dispatch(signUpUser(creds)),
    addCred: (cred) => dispatch(addSignUpProp(cred))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
                    
                    
                                 