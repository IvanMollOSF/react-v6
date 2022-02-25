const App = () => {
    return ("div", {}, React.createElement("h1", { id: "first-property" }, "Pure React!"));
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
