import React from "react"
const JobInputs = (props) => {
  return (
    props.skillset.map((val, idx)=> {
      let skillId = `skill-${idx}`, proficiencyId = `proficiency-${idx}`, yearsId = `years-${idx}`, importanceId = `importance-${idx}`
      return (
        <div key={idx}>
            <label htmlFor={skillId}>{`Skill #${idx + 1}`}</label>
            <input
            type="text"
            name={skillId}
            data-id={idx}
            id={skillId}
            value={props.skillset[idx].skill} 
            className="skill"
            />
            <label htmlFor={proficiencyId}>Proficiency</label>
            <select className="proficiency"
            type="text"
            name={proficiencyId}
            data-id={idx}
            id={proficiencyId}
            value={props.skillset[idx].proficiency}
            >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
            </select>    
            <label htmlFor={yearsId}>Years of experience</label>
            <select className="years"
            type="text"
            name={yearsId}
            data-id={idx} 
            id={yearsId}
            value={props.skillset[idx].years}
            >
                <option value="0-2">0-2</option>
                <option value="2-3">2-3</option>
                <option value="3-5">3-5</option>
                <option value="5-10">5-10</option>
                <option value="10+">10+</option>
            </select>	
            <label htmlFor={importanceId}>Importance of Skill</label>
            <select className="importance"
            type="text"
            name={importanceId}
            data-id={idx} 
            id={importanceId}
            value={props.skillset[idx].importance}
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
  )
}
export default JobInputs