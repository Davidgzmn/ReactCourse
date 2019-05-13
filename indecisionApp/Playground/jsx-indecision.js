console.log("App.js running");

//JSX - javascript XML
// Markup language for templating, like ejs
const app = {
    title: "Indecision app",
    subtitle: "Choose one goddammit",
    options: []
};
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        console.log("Form submitted", option);
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById("app");

const numbers = [55,101,1000,1234,33,3,2,11,0];




const removeAll = () => {
    app.options =[]; 
    renderApp();
};

const renderApp = () => {
    
const template = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? "here are your options" : "No options"}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should i do</button>
        <button onClick={removeAll}>Remove all</button>
        <ol>
        {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
        </div>
    ;
    ReactDOM.render(template, appRoot);
};
renderApp();

