class IndecisionApp extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOptions />
            </div>
        );
    }
}
class Header extends React.Component { //extends a react component, name must be uppercase
    render(){
        return (
            <div>
            <h1>Indecision Application</h1>
            <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}
class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    render(){
        return(
            <ol>
                <Option />
                <Option />
                <Option />
                <Option />
            </ol>
        );
    }
}
class AddOptions extends React.Component {
    render(){
        return(
            <form>
                <label for="optionText">Add an option</label>
                <input name="optionText" type="Text"></input>
                <button>Add</button>
            </form>
        );
    }
}
class Option extends React.Component {
    render(){
        return(
            <li>Option</li>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));