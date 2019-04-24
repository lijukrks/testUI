import { connect } from 'react-redux';
import ResetPassword from "./ResetPassword";
import {resetPasswordAction,resetPasswordFormChange} from '../../redux/actions'



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
        resetPasswordAction: (params) => {
            dispatch(resetPasswordAction(params));
        },
        resetPasswordFormChange: (params) => {
            dispatch(resetPasswordFormChange(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);