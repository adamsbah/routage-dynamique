import React, { Component } from 'react'
import axios from "axios"

/*afficher un seul character*/

export default class DisplayCharacter extends Component {
    
    state= {
        character: []
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
        .then(res => this.setState({character: res.data}))
        
    }
    render() {
    const {character} = this.state
        return (
            <div>
                {character.map((info, index) => 
                    <div key={index}>            
                        <p>{info.name}</p>
                        <img src={info.image} alt={info.name} />
                    </div>
                )}
            </div>
        )
    }
}
