import React from 'react'

function ExperienceItem(props) {
    return (
        <div style={{width: '100%', display: "flex", flexDirection: "column", gap: "0.5rem"}}>
           <input type="text" onChange={(e) => props.experienceInputHandlerTitle(e, props.id)} placeholder="title"></input>
           <input type="text" onChange={(e) => props.experienceInputHandlerDate(e, props.id)} placeholder="date"></input>
           <input type="text" onChange={(e) => props.experienceInputHandlerCompany(e, props.id)} placeholder="company"></input>
           <input type="text" onChange={(e) => props.experienceInputHandlerDescription(e, props.id)} placeholder="description"></input>
           <div style={{display: "flex", gap: "0.5rem"}}>
           <button style={{width: "5rem", marginBottom: "2rem"}} onClick={() => props.deleteExperienceHandler(props.id)}>delete</button>
           </div>



        </div>
    )
}

export default ExperienceItem
