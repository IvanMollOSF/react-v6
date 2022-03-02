import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/Person';

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: 'title'}, "Hello World!"),
        React.createElement(Person, { key: 'person' }, '')
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
