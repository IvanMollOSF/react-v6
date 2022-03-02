const Person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h3", { key: "h3" }, props.name),
        React.createElement("div", { key: "props" }, [
            Object.keys(props).map(key => React.createElement("div", { key: key }, props[key]))
        ]),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: "h1" }, "Pure React!"),
        React.createElement(Person, { key: "person", name: "Ivan", age: "33", email: "ivan@react.com" }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
