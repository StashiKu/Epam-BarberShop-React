import React, { PureComponent, Fragment} from 'react';

import { Container, Row, Col } from 'reactstrap';

import Jake from '../../../img/jake.png';
import Scratchy from '../../../img/scratchy.png';

import './ThirdStepAppointment.scss';

export default class ThirdStepAppointment extends PureComponent {
    render () {
        const { barber, tel, name, date } = this.props;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className='wrapper jake--hover' id='jake'>
                                {barber === 'Jake' ?
                                    <img alt='' src={Jake} className='img-fluid' /> :
                                    <img alt='' src={Scratchy} className='img-fluid' />
                                }
                            </div>
                        </Col>
                        <Col className='d-flex flex-column'>
                            <p>your barber:{barber}</p>
                            <p>date:</p>{' ' + date}
                            <p>name:{' ' + name}</p>
                            <p>tel:{' ' + tel}</p>
                        </Col>
                    </Row>
                </Container> 
            </Fragment>
        )
    }
}