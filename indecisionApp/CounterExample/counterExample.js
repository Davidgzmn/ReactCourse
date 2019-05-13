console.log("App.js running");

//JSX - javascript XML
// Markup language for templating, like ejs
const app = {
    title: "Indecision app",
    subtitle: "Choose one goddammit",
    options: ["One","Two"]
};

const template = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && app.options.length > 0 ? <div><p>Here are your options</p><ul><li>{app.options[0]}</li><li>{app.options[1]}</li></ul></div> : <p>No options</p>}
        <p>{app.options && app.options.length > 0 ? "here are your options" : "No options"}</p>
        </div>
;

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--; 
    renderCounterApp();
};
const reset = () => {
    count=0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () =>{
    const templateTwo=(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();