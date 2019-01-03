import React, { Fragment, PureComponent} from 'react';
import { Button, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter } from 'reactstrap';

import { addItem } from '../actions/changeAppointmentActions';
import { resetAppointment } from '../actions/changeAppointmentActions';
import { createAppointment } from '../actions/createAppointmentActions';
import { connect } from 'react-redux';

import SecondStepAppointment from '../components/Appointment/SecondStepAppointment/SecondStepAppointment';
import FirstStepAppointment from '../components/Appointment/FirstStepAppointment/FirstStepAppointment';
import StepIndicator from '../components/Appointment/StepIndicator/StepIndicator';

import ThirdStepAppointment from '../components/Appointment/ThirdStepAppointment/ThirdStepAppointment';

class AppointmentContainer extends PureComponent {
        state = {
            modal: false,
            isChosenJake: false,
            isChosenScratchy: false,
            appointmentStep: 1,
        };
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            appointmentStep: 1,
            isChosenJake: false,
            isChosenScratchy: false,
        });
        this.props.resetAppointment()
    }

    handleChange = (prop, value, barber) => {
        const { addItem } = this.props;
        if (value) {
            if (prop.length < 6) {
               addItem({[prop]: value})
                
            } else {
               addItem({[prop]: this.props[prop] + (+value)})
            }
        } else {
            this.setState({
                [prop]: !this.state[prop],
            })
           this.props.addItem({barber:barber})
        };
        
}   

    onNextStep = () => {
        const { appointmentStep } = this.state;
        if (appointmentStep === 1) {
            this.handleFirstStep()
        } else if (appointmentStep === 3 ) {
             this.onAddAppointment();
             this.toggle()
        }
    } 

    handleSubmit = (event) => {
        this.setState({
            appointmentStep: 3
        })
        event.preventDefault();
    }

    handleFirstStep = () => {
        const { isChosenJake, isChosenScratchy, appointmentStep} = this.state;
        if (this.props.totalPrise !== 0) {
            if (isChosenJake === isChosenScratchy) {
                if (isChosenJake === false) {
                    alert('Choose Barber')
                } else {
                    alert('you can choose only one barber')
                }
            } else {
                if(appointmentStep === 1) {
                    this.setState({
                        appointmentStep: 2,
                    })
                }
            }
        } else {
            alert('Choose service')
        }
    }

    onAddAppointment = () => {
        this.props.createAppointment(this.props.appointmentState)
    }

    onPrevStep = () => {
        const { appointmentStep } = this.state;
        if (appointmentStep === 3) {
            this.setState({
                appointmentStep: 2
            })
        } else {
            this.setState({
                appointmentStep: 1,
                isChosenJake: false,
                isChosenScratchy: false,
            })
        }
    }
            
    render() {
        const { appointmentStep } = this.state;
        const { totalPrise, barber, name, tel, date } = this.props;
        return (
            <Fragment>
                <Button color='secondary' onClick={this.toggle}
                    style={{color:'pink'}}>
                    Appointment
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} 
                    style={{margin:'5vh auto'}}>
                <ModalHeader toggle={this.toggle}>
                    <StepIndicator appointmentStep={appointmentStep} />
                </ModalHeader>
                <ModalBody>
                    {appointmentStep === 1 ? 
                    <FirstStepAppointment toggle={this.toggle}
                                          onCheckboxChange={this.handleChange}
                                          totalPrise={totalPrise}/> : null }
                    {appointmentStep === 2 ?  
                    <SecondStepAppointment handleSubmit={this.handleSubmit}
                                           onFormChange={this.handleChange}/> : null}
                    {appointmentStep ===3 ? 
                    <ThirdStepAppointment  barber={barber}
                                           name={name}
                                           date={date}
                                           tel={tel} /> : null}
                </ModalBody>
                <ModalFooter>
                    {appointmentStep !== 1 ? 
                    <Button color="danger" onClick={this.onPrevStep}>Back</Button> :  
                    <Button color="danger" disabled>Back</Button>}
                    
                    {appointmentStep === 2 ?
                    <Button color="primary" form='contacts' type='submit'>Next</Button> :
                    <Button color="primary" onClick={this.onNextStep}>{appointmentStep === 3 ? 
                                                                       'Confirm' : 'Next' }</Button>}
                    
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    appointmentState: state.changeAppointment.appointment,
    totalPrise: state.changeAppointment.appointment.totalPrise,
    name: state.changeAppointment.appointment.name,
    tel: state.changeAppointment.appointment.tel,
    date: state.changeAppointment.appointment.date,
    barber: state.changeAppointment.appointment.barber
})

 const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    createAppointment: data => dispatch(createAppointment(data)),
    resetAppointment: () => dispatch(resetAppointment())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer)
                
    