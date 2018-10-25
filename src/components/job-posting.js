import React from "react"
import axios from "axios";
import JobInputs from "./manage-jobs"

class Posting extends React.Component {

    state = {
        skillset: [{
            skill: "",
            proficiency: "",
            years: "",
            importance: ""
        }],
        title: "",
        description: ""      
    }

    handleChange = (e) => {
        if (["skill", "proficiency", "years", "importance"].includes(e.target.className) ) {
          let skillset = [...this.state.skillset]
          skillset[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ skillset }, () => console.log(this.state.skillset))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }
    
    addSkill = (e) => {
        this.setState((prevState) => ({
          skillset: [...prevState.skillset, {skill:"", proficiency: "", years: "", importance: "" }],
        }));
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        let data = {
            username: this.props.username,
            title: this.state.title,
            description: this.state.description,
            skillset: this.state.skillset
        }
        axios.post('/employer/recruiterProfile/addJob', data);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        let {title, description, skillset} = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label htmlFor="title">Title</label> 
                <input type="text" name="title" id="title" 
                    value={title}/>
                <label htmlFor="description">Description</label> 
                <input type="text" name="description" id="description" 
                    value={description}/>
                <button onClick={this.addSkill}>Add required skills</button>
                <JobInputs skillset={skillset} />
                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}

export default Posting; 
        
/*{
            skillset.map((val, idx)=>  {
            let skillId = `skill-${idx}`, 
                proficiencyId = `proficiency-${idx}`, 
                yearsId = `years of experience-${idx}`,
                importanceId = `Importance of Skill-${idx}`
                return (
                    <div key={idx}>
                        <label htmlFor={skillId}>{`Skill #${idx + 1}`}</label>
                        <input
                            className="form-input"
                            type="text"
                            name={skillId}
                            data-id={idx}
                            id={skillId}
                            value={this.state.skillset.skill}
                        />
                        <label htmlFor={proficiencyId}>Proficiency</label>
                        <select className="form-input"
                            type="text"
                            name="yearsId"
                            data-id={idx} 
                            id={yearsId}
                            value={skillset.proficiency}
                        >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                        </select>
                        <label htmlFor={skillId}>Years of experience</label>
                        <select className="form-input"
                            type="text"
                            name="yearsId"
                            data-id={idx} 
                            id={yearsId}
                            value={skillset.years}
                            >	
                                <option value="0-2">0-2</option>
                                <option value="2-3">2-3</option>
                                <option value="3-5">3-5</option>
                                <option value="5-10">5-10</option>
                                <option value="10+">10+</option>
                                
                        </select>
                        <label htmlFor={proficiencyId}>Importance of Skill</label>
                        <select className="form-input"
                            type="text"
                            name="importanceId"
                            data-id={idx} 
                            id={importanceId}
                            value={skillset.importance}
                            >	
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                )
            })
        }
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Posting


render() {
    let {owner, description, cats} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCat}>Add new cat</button>
        <CatInputs cats={cats} />
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Form*/