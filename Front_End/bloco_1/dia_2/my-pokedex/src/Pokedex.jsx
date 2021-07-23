import React from "react"
import pokemons from "./data"
import Pokemon from "./pokemon"

class Pokedex extends React.Component {
    render() {
        return (
            pokemons.map(({ name, type, averageWeight, image }, index) => {
                return (
                    <Pokemon 
                        key={index} 
                        name={name} 
                        type={type} 
                        weight={averageWeight} 
                        image={image}/>
            )})
        )
    }
}

export default Pokedex