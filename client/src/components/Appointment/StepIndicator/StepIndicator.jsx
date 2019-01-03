import React, { PureComponent, Fragment} from 'react';

import './StepIndicator.scss'

export default class StepIndicator extends PureComponent {
    render() {
        const { appointmentStep } = this.props;
        let step1 = 'step';
        let step2 = 'step';
        let step3 = 'step';
        if (appointmentStep === 1) {step1 += ' active'};
        if (appointmentStep === 2) {step2 += ' active'};
        if (appointmentStep === 3) {step3 += ' active'}; 
        return (
            <Fragment>
                <div className="container">
                    <section className="steps">
                        <div className={step1}>
                            <div className="step-icon">1</div>
                            <p>Service</p>
                        </div>
                        <div className="indicator-line"></div>
                        <div className={step2}>
                            <div className="step-icon">2</div>
                            <p>Contacts</p>
                        </div>
                        <div className="indicator-line"></div>
                        <div className={step3}>
                            <div className="step-icon">3</div>
                            <p>Last Step</p>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}