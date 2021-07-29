import React from "react"

class Forms extends React.Component {
    constructor() {
        super();
        this.handleChanges = this.handleChanges.bind(this);
        this.state = {
            name: '',
            age: 0,
            subject: '',
            textAbout: '',
            singUp: 'true'
        }
    }

    handleChanges({target}) {
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]: value})
    }

    render() {
        return (
            <form className="form"> 
                <label >
                    Name:
                    <input
                        name="name" 
                        onChange={this.handleChanges} 
                        type="text" />
                        value={this.state.name} 
                </label>
                <label >
                    Age:
                    <input 
                        name="age"
                        onChange={this.handleChanges} 
                        value={this.state.age} 
                        type="number" />
                </label>
                <label >
                    Choose your favorite subject:
                    <select 
                        onChange={this.handleChanges} 
                        value={this.state.subject} 
                        name="subject" 
                        id="xablau"
                        >
                          <option value="commun">Communication</option>
                          <option value="tech">Technology</option>
                          <option value="ed">Education</option>
                          <option value="fin">Financial</option>
                    </select>
                </label>
                <label >
                    Tell us more about your favorite subject:
                    <textarea 
                        name="textAbout"
                        onChange={this.handleChanges} 
                        value={this.state.textAbout}>

                    </textarea>
                </label>
                <label>
                    Would you like to be gifted with our daily infos?
                    <input 
                        onChange={this.handleChanges}
                        type="checkbox" 
                        name="singUp" 
                         />
                </label>
            </form>
        )
    }
}

export default Forms