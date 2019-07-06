import React from 'react';
import './Login.css';
import { getLoginMethod } from './Actions';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Redirect } from 'react-router-dom';

const classes = {
    '@global': {
        body: {
            backgroundColor: 'white',
        },
    },
    paper: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textFieldContainer: {
        display: 'grid'
    },
    textFieldError: {
        color: 'red'
    }
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div style={classes.textFieldContainer}>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id={label}
            label={label}
            {...input}
            type={type}
            error={(touched && error) ? true : false}
        />
        {touched && error && <span style={classes.textFieldError}>{error}</span>}
    </div>
)

class LoginContainer extends React.Component {

    handleChange = (data) => {
        let requestData = {};
        requestData.username = data.email;
        requestData.password = data.password;
        this.props.getLoginMethod(requestData);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, loading, loginResponse } = this.props
        if (loginResponse) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Container component="main" maxWidth="xs">
                {loading && <div className="siteloader"><CircularProgress color="secondary" /></div>}
                <div className={classes.paper}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" align="center">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(this.handleChange)}>
                        <Field
                            name="email"
                            type="text"
                            component={renderField}
                            label="Email"
                        />
                        <Field
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                        />
                        <Button variant="contained" color="secondary" disabled={submitting} type='submit'>
                            Log In
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant="contained" color="secondary" disabled={pristine || submitting} onClick={reset}>
                            Reset
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        loading: state.loginReducer.loading,
        error: state.loginReducer.error,
        loginResponse: state.loginReducer.loginResponse,
    };
};

export default connect(mapStateToProps, { getLoginMethod })(reduxForm({
    form: 'submitValidation',
    validate
})(LoginContainer));