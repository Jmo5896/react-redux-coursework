// import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
const buttonTxt = "click me!"
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{
                backgroundColor: 'blue',
                color: 'white'
            }}>
                {buttonTxt}
            </button>
        </div>
    );
}

// take the react component and render it to the browser
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)