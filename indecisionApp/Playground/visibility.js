console.log("Running");

const app = {
    title: "Visibility App",
    details: "This are the details of the app",
    showing: false
};

const appRoot = document.getElementById("app");
const ToggleDetails = () => {
    app.showing = !app.showing;
    RenderApp();
};
const RenderApp = () => {
    const template = 
    <div>
        <h1>{app.title}</h1>
        <button onClick={ToggleDetails}>{app.showing == false ? "Show Details" : "Hide details" }</button>
        {app.showing == true ? <p>{app.details}</p> : undefined}
    </div>
    ;
    ReactDOM.render(template,appRoot);
}
RenderApp();