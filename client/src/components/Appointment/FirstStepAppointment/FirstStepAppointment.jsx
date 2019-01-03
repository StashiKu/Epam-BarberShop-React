import React, { PureComponent, Fragment} from 'react';

import Jake from '../../../img/jake.png';
import Scratchy from '../../../img/scratchy.png';

import './FirstStepAppointment.scss'

import { Form, 
         FormGroup, 
         Input,
         InputGroup, 
         InputGroupAddon, 
         InputGroupText,
         Row, 
         Popover, 
         PopoverHeader, 
         PopoverBody } from 'reactstrap';

export default class FirstStepAppointment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            popoverOpenJake: false,
            popoverOpenScratchy: false,
        }
    }

    toggle = (prop) => (e) => {
        this.setState({
            [prop]: !this.state[prop]
        })
    }

    handleChange = (prop, barber) => (e) => {
        const target = e.target;
        const value = target.value;
        if (target.checked) {
            if (prop === 'totalPrise') {
                this.props.onCheckboxChange(prop, value)
            } else {
                this.props.onCheckboxChange(prop, null, barber);
            }
        } else {
            if (prop === 'totalPrise') {
                this.props.onCheckboxChange(prop, -value)
            } else {
                this.props.onCheckboxChange(prop, null, barber)
            }
        }
        
    }
                
    render() {
        const { totalPrise } = this.props;
        const { popoverOpenJake, popoverOpenScratchy} = this.state;
        return (
            <Fragment>
                <Form>
                    <Row className='flex-column mx-1 py-4 rounded'
                        style={{border: '1px solid #ced4da'}}>
                        <h5 className='text-center'>Choose Barber</h5>
                        <Row className='justify-content-around'>
                            <div className='wrapper jake--hover' id='jake'>
                                    <img src={Jake} 
                                        className='img-fluid' 
                                        id='popover-jake' alt=''
                                        onMouseOver={this.toggle('popoverOpenJake')}
                                        onMouseLeave={this.toggle('popoverOpenJake')}/>
                                <Popover placement="bottom" 
                                        isOpen={popoverOpenJake} 
                                        target="popover-jake">
                                    <PopoverHeader>Jake</PopoverHeader>
                                    <PopoverBody>
                                        <span>The old barber.</span><br/>
                                        <span>Haircut in 1 minute or money back</span>
                                    </PopoverBody>
                                </Popover>
                            </div>
                            <div className='wrapper scratchy--hover'>
                                <img src={Scratchy} 
                                        className='img-fluid' alt=""
                                        id='popover-scratchy' 
                                        onMouseOver={this.toggle('popoverOpenScratchy')}
                                        onMouseLeave={this.toggle('popoverOpenScratchy')}/>
                                <Popover placement="bottom" 
                                        isOpen={popoverOpenScratchy} 
                                        target="popover-scratchy" 
                                        >
                                    <PopoverHeader>Scratchy</PopoverHeader>
                                    <PopoverBody>Fast and bloody</PopoverBody>
                                </Popover>
                            </div>
                        </Row>
                        <InputGroup className='mt-3 d-flex justify-content-around'>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText>
                                    <Input name='barber' 
                                        addon type="checkbox" 
                                        className='mr-2'
                                        onChange={this.handleChange('isChosenJake', 'Jake')} 
                                        />Jake
                                </InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend" className='ml-5'>
                                <InputGroupText>
                                    <Input name='barber' 
                                        addon type="checkbox" 
                                        className='mr-2' 
                                        onChange={this.handleChange('isChosenScratchy', 'Scratchy')}/>Scratchy
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Row>
                    <FormGroup className=' mx-1 mt-3 py-4 rounded'
                        style={{border: '1px solid #ced4da'}}>
                        <h5 className='text-center'>Choose service</h5>
                        <InputGroup className='mt-3 py-3 d-flex justify-content-around'>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className='flex-column'>
                                    <Input name='check' addon
                                        className='mb-1' 
                                        type="checkbox" 
                                        value='15' 
                                        onChange={this.handleChange('totalPrise')}/>Haircut
                                    <span className='prise'>$15</span>
                                </InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className='flex-column'>
                                    <Input name='check' addon 
                                        className='mb-1'
                                        type="checkbox" 
                                        value='10' 
                                        onChange={this.handleChange('totalPrise')}/>Shaving
                                    <span className='prise'>$10</span>
                                </InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className='flex-column'>
                                    <Input name='check' addon
                                        className='mb-1'
                                        type="checkbox" 
                                        value='8' 
                                        onChange={this.handleChange('totalPrise')} />Beard Grooming
                                    <span className='prise'>$8</span>
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <p className='prise-par'>Total Prise:</p>  
                        <p className='prise-par__sum'>{' ' + totalPrise}<span>$</span></p>
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}
                                    
