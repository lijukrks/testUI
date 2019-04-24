import React from 'react';
import {Component} from 'react';
import { Switch } from 'react-router-dom';

import { ProtectedRoute } from '../ProtectedRoute';

import HomePage from '../HomePage/index';

class MainFrame extends Component{
    render(){
        return(
            <Switch>
                <ProtectedRoute path='/home' name='HomePage' component={HomePage} />
                <ProtectedRoute path='/' component={HomePage} />
            </Switch>
        )
    }
}

export default MainFrame