import React, { PureComponent, Fragment} from 'react';
import AppNavBar from './AppNavbar';
import Main from './Main';

import { connect } from 'react-redux';

import Loading from './Loading/Loading'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                 {this.props.loading ? <Loading /> : null}
                <AppNavBar />
                <Main />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.createAppointment.loading
})

export default connect(mapStateToProps)(Home)