import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    render() {
        const { user } = this.props;
        
        if(!user) {
            return null;
        };

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}
// this has access to both the global state and the props passed to this component
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);