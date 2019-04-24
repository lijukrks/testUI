import { connect } from 'react-redux';
import {loginAction,loginFormChange} from '../../redux/actions'
import Login from "./Login";



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
        loginAction: (params) => {
            dispatch(loginAction(params));
        },
        loginFormChange: (event) => {
            dispatch(loginFormChange(event));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);