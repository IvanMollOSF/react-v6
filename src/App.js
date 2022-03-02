import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/Person';

const App = () => {
    return (
        <div>
            <h1>React with JSX</h1>
            <Person name="Ivan" age="33" email="ivan@react.com" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
