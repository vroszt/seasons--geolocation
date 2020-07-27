import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
   
    state = { lat: null, errMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState= ({ errMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.lat){
            return <div>Error: {this.state.errMessage}</div>
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
            return <div><Spinner message="Please accept location request" /></div>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    }
};

ReactDom.render(<App />, document.querySelector('#root'));