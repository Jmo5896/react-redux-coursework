import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';
import CLIENT_ID from '../config';

class GoogleAuth extends Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            }).then(() => {
                // reaching into the google auth object for all of these properties
                //to test you can run the signin and sign out commands inside the google console:
                // sign in: gapi.auth2.getAuthInstance().signIn()
                // sign out: gapi.auth2.getAuthInstance().signOut()
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                Sign In with Google
                </button>
            );
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);