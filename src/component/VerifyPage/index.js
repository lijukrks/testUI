import { connect } from 'react-redux';
import VerifyPage from "./VerifyPage";
import {verifyAction,verifyFormChange} from '../../redux/actions'
import './index.scss';



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
        verifyAction: (params) => {
            dispatch(verifyAction(params));
        },
        verifyFormChange: (params) => {
            dispatch(verifyFormChange(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPage);