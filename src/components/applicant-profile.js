import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginForm from './login-form'

class ApplicantProfile extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            skillsets: [{ username: '' }],
            proficiency: [{ username: ''}],
            yearsExperience: [{ username: ''}],
            achievements: [{ username: ''}]
        };
    }
      
    handleNameChange = (evt) => {
        this.setState({ username: evt.target.value });
    }
      
    handleShareholderNameChange = (idx) => (evt) => {
        const newSkillsets = this.state.skillsets.map((skillset, sidx) => {
          if (idx !== sidx) return skillset;
          return { ...skillset, username: evt.target.value };
        });
        this.setState({ shareholders: newSkillsets });
    }
      
    handleSubmit = (evt) => {
        const { username, skillsets } = this.state;
        alert(`Incorporated: ${username} with ${skillsets.length} skillsets`);
    }
      
    handleAddShareholder = () => {
        this.setState({ skillsets: this.state.skillsets.concat([{ name: '' }]) });
    }
      
    handleRemoveShareholder = (idx) => () => {
        this.setState({ skillsets: this.state.skillsets.filter((s, sidx) => idx !== sidx) });
    }
      
    render() {    
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                placeholder="Applicant Username"
                value={this.state.username}
                onChange={this.handleNameChange}
                />
                <h4>Shareholders</h4>
                {this.state.skillsets.map((skillset, idx) => (
                    <div className="shareholder">
                        <input
                        type="text"
                        placeholder={`Skillset #${idx + 1} name`}
                        value={skillset.username}
                        onChange={this.handleShareholderNameChange(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddShareholder} className="small">Add Skillset</button>
                <button>Incorporate</button>
            </form>
        )
    }
}

export default ApplicantProfile;
