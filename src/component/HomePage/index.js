import React from 'react';

class HomePage extends React.Component {
    handleLogout(){
        localStorage.clear();
        window.location.href = "/login"
    }
    render() {
        return (
            <div>
                welcome
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}



export default HomePage;