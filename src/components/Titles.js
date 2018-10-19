import React from 'react';

class Titles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount(){
        this.timerId= setInterval(
            () =>this.tick(),
            1000
        );
      }

      componentWillUnmount(){
        clearInterval(this.timerID);
      }

      tick(){
          this.setState({
              date:new Date()
          });
      }
    render(){
        return(
            <div>
                <h1 className="totle-container__title">Weather Finder</h1>
                <h2>Timer : {this.state.date.toLocaleTimeString()}</h2>
                <p>Find out temperature, conditions and more</p>
            </div>
        );
    }
}

export default Titles;