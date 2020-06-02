import React, { Component } from 'react';
import CLIENT_ID from '../config';

class GoogleAuth extends Component {
    state = {
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.GetAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        } else {
            return <div> I am not signed in</div>;
        }
    }

    render() {
        return (
            <div className="google-auth">
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;