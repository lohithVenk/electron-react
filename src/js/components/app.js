import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Nodejs server not started, please start the server with `npm run server`.',
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => {
                const {message} = data;
                this.setState({
                    message
                });
            })
            .catch(error => console.error('error', error));
    }

    render() {
        return (
            <div>
                <h1> React-Electron! -- {this.state.message} </h1>
            </div>
        )
    }
}

export default App;
