import React, {Component} from "react";


class SearchForm extends Component {
    state = {
        query: '',
        //  titles: []
    }

    handleChange = e =>{
        const {value: query} = e.target
        this.setState({ query })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {query} = this.state
        const {onSubmitForm} = this.props
        onSubmitForm(query)
    }
    
    render () {
        const {query} = this.state
        const {handleChange, handleSubmit} = this
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={ query} onChange={handleChange}/>
                    <button>Obtén tus películas</button>
                </form>
            </div>            
        );
    }    
}

export default SearchForm;