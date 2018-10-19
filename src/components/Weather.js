import React from 'react';

const Weather = props =>{
    return(
            <div className="weather__info">
                {
                    props.city && props.country && <p className="weather__key">City : 
                   <span className="weather__value"> {props.city} , {props.country} </span> 
                   </p> 
                }  
                
                {props.temp && <p className="weather__key">Temp : 
               <span className="weather__value"> {props.temp} </span>
                </p> 
                }   
                {
                    props.humidity &&<p className="weather__key">Humidity : 
                   <span className="weather__value"> {props.humidity} </span>
                   </p> 
                } 
                {
                    props.desc && <p className="weather__key"> Condition : 
                    <span className="weather__value"> {props.desc} </span> 
                    </p>
                } 
                {
                    props.error && <p className="weather__error"> {props.error} </p>
                }
            </div>
    );
}

export default Weather;