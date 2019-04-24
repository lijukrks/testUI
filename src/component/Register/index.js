import { connect } from 'react-redux';
import Register from "./Register";
import {registerAction,registerFormChange} from '../../redux/actions'
import './index.scss';



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
        registerAction: (params) => {
            dispatch(registerAction(params));
        },
        registerFormChange: (params) => {
            dispatch(registerFormChange(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);