import { connect } from 'react-redux';
import {registerAction} from '../../actions'
import Register from "./Register";



const mapStateToProps = state => {
    return { ...state } || {}
}

const mapDispatchToProps = dispatch => {
    return {
      
        registerUser: (params) => {
            dispatch(registerAction(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);