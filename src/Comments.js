import React, { Component } from 'react'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert('Your comment says: ' + this.state.value);
    }

    render() {
        return(
            <form>
            <input type='text' value={this.state.value} onChange={this.handleChange} />
            <input type='submit' onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default Comments