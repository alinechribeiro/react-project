import React from 'react';

class SearchBar extends React.Component {
    //our call back with one argument being passed automatically 
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    state = { term: '' }; //react controlled component
    
    onFormSubmit = event => { //error function to bind functions, solving broken function for lack of variable defined when calling the function
        event.preventDefault(); //avoiding the browser to submit the form and refresh the page
        
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
//other property changes: onClick, onChange, onSubmit
export default SearchBar;