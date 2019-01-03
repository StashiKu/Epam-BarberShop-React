import React, { PureComponent, Fragment } from 'react';
import { Form, 
         FormGroup, 
         Label, 
         Input,
} from 'reactstrap';

export default class SecondStepAppointment extends PureComponent {
  
  handleChangeMiddleware = (prop) => (e) => {
    const value = e.target.value.trim();
    this.props.onFormChange(prop, value);
  }

  render() {
    const {handleSubmit } = this.props;
    return (
      <Fragment>
        <Form id='contacts' onSubmit={handleSubmit}>
          <FormGroup>
                <Label for="name">Name</Label>
                <Input type="name" name="name" id="name" 
                       placeholder="Name" required 
                       onChange={this.handleChangeMiddleware('name')}/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" 
                       placeholder="Email" 
                       onChange={this.handleChangeMiddleware('email')}/>
            </FormGroup>
            <FormGroup>
                <Label for="tel">Email</Label>
                <Input type="tel" name="tel" id="tel" 
                       pattern='\d{1}-[0-9]{3}-[0-9]{2}-[0-9]{2}'  
                       placeholder="Telephone"  
                       onChange={this.handleChangeMiddleware('tel')}/>
          </FormGroup>
          <FormGroup>
            <Label for="date-input" className="col-2 col-form-label">Date</Label>
            <div className="col-10">
              <Input className="form-control" 
                     type="date" id="date-input" 
                     onChange={this.handleChangeMiddleware('date')} />
            </div>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}
        
