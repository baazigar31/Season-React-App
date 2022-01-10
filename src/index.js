import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './displaySeason';
import Loader from './Loader';
import DisplayError from './DisplayError';

class App extends React.Component{
    

    state={lat:null,errorMessage:''};


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(position=>{
            this.setState({lat:position.coords.latitude});
        },err=>{
            this.setState({errorMessage:err.message});
        })
    }

  render(){
            if(this.state.errorMessage && !this.state.lat){
                return (
                    <DisplayError><div>Error:{this.state.errorMessage}</div></DisplayError>
                )
                
                
            }
            if(!this.state.errorMessage && this.state.lat){
                return (
                    <SeasonDisplay content={this.state.lat}/>
                )
            }
            return (
                <div>
                    <Loader message="Please share the location!"/>
                </div>
            )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));