import React from 'react'

class Pokemon extends React.Component {
    render() {
        return (
           <div class="card">
               <div class="info-container">
                <span>Name: {this.props.name}</span>
                <span>Type: {this.props.type}</span>
                <span>Weight: {this.props.weight.value} {this.props.weight.measurementUnit}</span>
               </div>
               <div class="image-container">
                <img src={this.props.image} alt={this.props.name} />
               </div>
           </div>
        )
    }
}

export default Pokemon