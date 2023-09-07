import React, { useState } from 'react'

function PersonalInfo(props) {
    const [personalInfo, setPersonalInfo] = useState({
        FirstName: "",
        LastName: "",
        Title: "",
        Address: "",
        PhoneNumber: "",
        Email: ""
    })

    const setFirstName = (e) => {
        const copy = {...personalInfo}
        copy.FirstName = e.target.value;
        setPersonalInfo(copy)
    }

    const setLastName = (e) => {
        const copy = {...personalInfo}
        copy.LastName = e.target.value
        setPersonalInfo(copy)
    }

    const setInfo = (e, targetKey) => {
        // let target = name
        // setPersonalInfo({...personalInfo, targetKey : e.target.value})
        setPersonalInfo((prev) => ({
            ...prev,
            [targetKey] : e.target.value
        }))
            // setState(prevState => {...prevState, existingKey: 'new value'})
        // setPersonalInfo(prevState => {...prevState, existingkey : e.target.value})
    }

    // console.log(personalInfo)

    return (
        <div style={{display: "flex", flexDirection:  "column", width: "90%"}}>
            <h2>Personal Info:</h2>
            {/* <input type="text" placeholder="First Name" onChange={e => setPersonalInfo({FirstName: e.target.value})} value={personalInfo.FirstName}></input> */}
            

            <input type="text" placeholder="First Name" onChange={((e) => props.setPersonalInfoHandler(e, "FirstName"))}></input>


            {/* <input type="text" placeholder="First Name" onChange={((e) => props.setInfo(e, "FirstName"))} value={personalInfo.FirstName}></input> */}
            {/* <input type="text" placeholder="First Name" onChange={((e) => setPersonalInfo({...personalInfo, FirstName : e.target.value}))} value={personalInfo.LastName}></input> */}
            <input type="text" placeholder="Last Name" onChange={((e) => props.setPersonalInfoHandler(e, "LastName"))}></input>
            <input type="text" placeholder="Title" onChange={((e) => props.setPersonalInfoHandler(e, "Title"))}></input>
            <input type="text" placeholder="Address" onChange={((e) => props.setPersonalInfoHandler(e, "Address"))}></input>
            <input type="text" placeholder="Phone Number" onChange={((e) => props.setPersonalInfoHandler(e, "PhoneNumber"))}></input>
            <input type="text" placeholder="Email" onChange={((e) => props.setPersonalInfoHandler(e, "Email"))}></input>
            <input type="text" placeholder="Info..." onChange={((e) => props.setPersonalInfoHandler(e, "Info"))}></input>


            <div>
            <h1>{personalInfo.FirstName}</h1>
            <h2>{personalInfo.LastName}</h2>
            <h3>{personalInfo.Title}</h3>
            <p>{personalInfo.Address}</p>
            <p>{personalInfo.PhoneNumber}</p>
            <p>{personalInfo.Email}</p>
            </div>


        </div>
    )
}

export default PersonalInfo
