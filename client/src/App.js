import React,{Component} from 'react';
let ReactDOM = require('react-dom');

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country:"",
            name:"", 
            icon:"", 
            description:"", 
            temp:"", 
            temp_min:"", 
            temp_max:"", 
            humidity:""
        }
    }
    componentDidMount(){
        fetch('/current-weather')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState={name:data.name}
        })
    }

    render(){
        const {country}=this.state;
        const {name}=this.state;
        const {icon}=this.state;
        const {description}=this.state;
        const {temp}=this.state;
        const {temp_min}=this.state;
        const {temp_max}=this.state;
        const {humidity}=this.state;

        return (
            <form>
                <label>Current Weather in</label>
                <ol>
                    <li><p name="Country">Country: {country}</p></li>
                    <li><p name="name">Area: {name}</p></li>
                    <li><img name="icon" src={icon}/></li>
                    <li><p name="description">Description: {description}</p></li>
                    <li><p name="temp">Current Temperature: {temp}</p></li>
                    <li><p name="temp_min">Minimum Temperature: {temp_min}</p></li>
                    <li><p name="temp_max">Maximum Temperature: {temp_max}</p></li>
                    <li><p name="humidity">Humidity: {humidity}</p></li>
                </ol>
            </form>
        )
    }
}
export default CurrentWeather;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();