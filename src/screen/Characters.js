import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

/* afficher tous les caracters*/
class Characters extends Component {
    state = {
        characters: []
    }
    componentDidMount() {
    axios
    .get(`https://harrypotterapi20.herokuapp.com/characters`)
        
        .then(res=> this.setState({characters: res.data}))
}
    render() {
        return (
            
            <div>
            
            Characters
            {this.state.characters.map((character, index )=> (
                <Link  key={index} to={`/character/${character.id}`}>
                <Card 
                key={index}
                name={character.name}
                image={character.image}
                id={character.id} />
                </Link>
                
                ))}
            </div>
        )
    }
}

export default  Characters 