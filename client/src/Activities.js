import React, { Component } from 'react'
import axios from "axios"

export default class Activities extends Component {
    constructor(props){
        super(props);
        this.state = {
            activities: []
        };
    }

    async componentDidMount() {
        var respuesta = await axios.get('http://localhost:5000/api/activities');
        if (respuesta.status === 200) {
            console.log("ok");
        }
        this.setState({activities: respuesta.data});
        console.log(this.state.activities);
    }

    render() {
        return (
            <div className = "contenedor actividadesbox">
                {this.state.activities.map( act => (
                    <React.Fragment key = {act._id}>
                        <div className= "actividades">
                            <p>{act.creator}</p>
                            <p>{act.text}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        )
    }
}
