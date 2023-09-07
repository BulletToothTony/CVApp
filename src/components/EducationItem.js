import React from 'react'

function EducationItem(props) {
    return (
        <div style={{width: '100%', display: "flex", flexDirection: "column", gap: "0.5rem"}}>
           {/* <input type="text" onChange={(e) => props.educationInputHandler(e, props.id)}></input> */}
           <input type="text" onChange={(e) => props.educationInputHandlerCourse(e, props.id)} placeholder="Course"></input>
           <input type="text" onChange={(e) => props.educationInputHandlerUniversity(e, props.id)} placeholder="University"></input>
           <input type="text" onChange={(e) => props.educationInputHandlerDate(e, props.id)} placeholder="Date"></input>
           <input type="text" onChange={(e) => props.educationInputHandlerDescription(e, props.id)} placeholder="Description"></input>
           <button style={{width: "5rem", marginBottom: "2rem"}} onClick={() => props.deleteEducationItemHandler(props.id)}>delete</button>
        </div>
    )
}

export default EducationItem
