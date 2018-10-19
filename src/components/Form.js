import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={city:'',country:''};
        this.handleCity=this.handleCity.bind(this);
        this.handleCountry=this.handleCountry.bind(this);
    }
    handleCity(e){
        this.setState({city: e.target.value.toUpperCase()});
    }
    handleCountry(e){
        this.setState({country: e.target.value.toUpperCase()});
    }
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
            {this.props.city}
            {this.props.country}
                <input type="text" name="city" placeholder="City..." onChange={this.handleCity} value={this.state.city}/>
                <input type="text" name="country" placeholder="Country ..." onChange={this.handleCountry} value={this.state.country}/>
                <button>Get Weather </button>
            </form>
        );
    }
}

export default Form;