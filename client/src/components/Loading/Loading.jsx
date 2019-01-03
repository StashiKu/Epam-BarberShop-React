import React, { PureComponent, Fragment } from 'react';

import './Loading.scss'

export default class Loading extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='loading-popup'>
                    <div className="loading">Loading...</div>
                </div>
            </Fragment>
        )
    }
}