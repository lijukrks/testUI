import { connect } from 'react-redux';
import forgotPAssword from "./ForgotPassword";
import {forgotPasswordAction,forgotPasswordFormChange} from '../../redux/actions'



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
        forgotPasswordAction: (params) => {
            dispatch(forgotPasswordAction(params));
        },
        forgotPasswordFormChange: (params) => {
            dispatch(forgotPasswordFormChange(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(forgotPAssword);