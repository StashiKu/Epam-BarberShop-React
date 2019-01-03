import React, { PureComponent, Fragment } from 'react';

import AppNavBar from '../AppNavbar';
import './Account.scss';

import { Container,
         Row,
         Col,
         Button,
         Collapse,
         Card,
         CardBody,
         Input } from 'reactstrap';

export default class Account extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = { 
            email: false,
            history: false
        };
    }
    
    toggle = (prop) => () => {
        this.setState({ [prop]: !this.state[prop] });
    }

    render() {
        return (
            <Fragment>
                <AppNavBar />
                <Container>
                    <Button color="primary" onClick={this.toggle('history')} style={{ marginBottom: '1rem' }}>History</Button>
                    <Collapse isOpen={this.state.history}>
                    <Card className='mb-3'>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                    </Collapse>
                    <p className='account-title mt-4'>Email</p>
                    <p className='account-intro'>{}</p>
                    <Button color="primary" 
                            onClick={this.toggle('email')} 
                            style={{ marginBottom: '1rem' }}
                            className=''>Change</Button>
                    <Collapse isOpen={this.state.email}>
                        <Card>
                            <CardBody>
                                <Row className='justify-content-between'>
                                    <Col className='col-sm-6'>
                                        <Input type='email' placeholder='new email'/>
                                    </Col>
                                   
                                        <Button className='ml-auto mr-2'>Change</Button>
                                    
                                </Row>
                            </CardBody>
                        </Card>
                    </Collapse>
                </Container>
            </Fragment>
        )
    }
}
                        