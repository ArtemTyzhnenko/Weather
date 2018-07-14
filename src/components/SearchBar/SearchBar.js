import React, {Component} from 'react';

export default class SearchBar extends Component{
    state = {
        term: '',
    };

    handleInput = (e) => {
        this.setState({ term: e.target.value})
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        const {fetchWeather} = this.props;
        fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.handleInput}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}