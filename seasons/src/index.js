import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null, erorMessage: '' };
    }
    
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        //call Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component has updated.');
    }
    //React says we have to define render!!
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>; 
        }

        if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitute: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }

}

ReactDOM.render(<App />,document.querySelector('#root'));