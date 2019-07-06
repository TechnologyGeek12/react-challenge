import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const classes = {
    dashboardContainer: {
        backgroundColor: '#cfe8fc',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardTitle: {
        fontSize: 40,
        color: 'rebeccapurple',
        fontWeight: 600
    },
    dashboardToken: {
        fontSize: 24,
        fontWeight: 600
    }
}

class DashboardContainer extends React.Component {
    render() {
        const { loginResponse } = this.props
        if (!loginResponse) {
            return <Redirect to='/' />
        }
        return (
            <div style={classes.dashboardContainer}>
                <div>
                    <div style={classes.dashboardTitle}>Login Succesfully</div>
                    <div style={classes.dashboardToken}>Token Value:{loginResponse && loginResponse.token}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        loginResponse: state.loginReducer.loginResponse,
    };
};

export default connect(mapStateToProps)((DashboardContainer));