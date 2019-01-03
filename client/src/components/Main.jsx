import React, { PureComponent, Fragment } from 'react';
import { Container, Alert } from 'reactstrap';
import Pole from './Pole/Pole';
import { connect } from 'react-redux';

class Main extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    onDismiss = () => {
        this.setState({ visible: false });
    }

    render() {
        const { error, success } = this.props;
        return (
            <Fragment>
                <Container className='d-flex align-items-center flex-column'>
                    {error ? <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                        Appointment creation failed!!!
                    </Alert> : null}
                       {success ?<Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                       Appointment created successfully!!!
                   </Alert> : null }
                    <div>
                        <h1 className='title'>
                            <p className='title__spring'>Springfield</p>
                            <p>Barber</p>
                            <p>Shop</p>
                        </h1>
                        <Pole />
                    </div>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.createAppointment.error,
    success: state.createAppointment.success
})

export default connect(mapStateToProps)(Main)