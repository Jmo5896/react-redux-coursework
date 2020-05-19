import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
    state = {
        lat: null,
        errorMsg: ''
    }

    componentDidMount() {
        console.log('component mounted')
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), //success cb
            (err) => this.setState({ errorMsg: err.message }) //error cb 
        );
    }

    renderContent = () => {
        if (this.state.errorMsg && !this.state.lat) {
            return <h1>Error: {this.state.errorMsg}</h1>
        }

        if (!this.state.errorMsg && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
                )
        }

        return <Spinner message="Please accept location request"/>
    }

    render() {

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )


    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
