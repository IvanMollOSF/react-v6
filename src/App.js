import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './components/SearchParams';

const App = () => {
    return (
        <div className='container'>
            <h1>Star Wars API Searcher</h1>
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
