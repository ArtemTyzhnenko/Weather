import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        term: '',
    };

    handleInput = (e) => {
        this.setState({ term: e.target.value })
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const { fetchWeather } = this.props;
        fetchWeather(this.state.term);
        this.setState( {term: ''} );
    };

    render(){
        const {didInvalidate} = this.props;
        const ClassName = `col-md-12 input-group ${didInvalidate ? 'has-danger' : null}`;
        return(
            <div>
                <form onSubmit={ this.handleSubmit } className={ClassName}>
                    <input
                        placeholder="Get a five-day forecast in your favorite city"
                        className="form-control"
                        value={ this.state.term }
                        onChange={ this.handleInput }
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </span>
                    { didInvalidate ? <div className="text-help help-block ">Oops, it's wrong city</div> : null }

                </form>

            </div>
        )
    }
}