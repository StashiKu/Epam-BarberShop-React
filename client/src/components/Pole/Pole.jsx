import React, { PureComponent, Fragment} from 'react';
import './Pole.scss';

export default class Pole extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="pole-wrapper">
                    <div className="pole">
                        <div className="head"></div>
                        <div className="head-base"></div>
                        <div className="loader-head"></div>
                        <div className="loader">
                            <div className="inset">
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="red"></div>
                                <div className="blue"></div>
                                <div className="red"></div>
                                <div className="blue"></div>
                            </div>
                        </div>
                        <div className="loader-base"></div>
                        <div className="base"></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}