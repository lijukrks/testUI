import React from 'react';
import './index.scss';

class HomePage extends React.Component {
    handleLogout() {
        localStorage.clear();
        window.location.href = "/login"
    }
    render() {
        return (
            <header className="main-header">
                <div className="brand">
                    welcome
                </div>
                <ul className="navigation">
                    <li>
                        <a onClick={this.handleLogout}>Logout</a>
                    </li>
                </ul>
            </header>
        );
    }
}
export default HomePage;