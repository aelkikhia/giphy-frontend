import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";

const client_id = '938346147180-ec4rhc8pv9n4h4kj2ih4f12h2l0210gi.apps.googleusercontent.com';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: client_id,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        console.log(this.auth.currentUser.get());
      isSignedIn? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()
    };

    onSignInClick = () => { this.auth.signIn(); };

    onSignOutClick = () => { this.auth.signOut(); };

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

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);