import React, { useEffect, useState } from "react";
import EducationItem from "./EducationItem";

function Education(props) {
  const [educationText, setEducationText] = useState("");
  const [educationCount, setEducationCount] = useState(1);
  const [educationObject, setEducationObject] = useState([
    { id: 0, Course: "Computer Science", University: "Harvard", Date: "2019-2023", Description: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est." },
    // { id: 1, text: "College", val: "" },
    // { id: 2, text: "NEET", val: "" },
  ]);
  
  useEffect(() => {
    props.setEducationHandler(educationObject)
  }, [educationObject, props])

  const addButtonHandler = () => {
      const copy = [...educationObject]
      copy.push({id: Math.random(), text: 'NEW UNI', val: ""})
      console.log(copy)
      setEducationObject(copy)
    // setEducationCount((educationCount) => educationCount + 1);
  };

  const deleteEducationHandler = (index) => {
    console.log(index);

    const del = educationObject.find((el) => el.id === index);
    console.log(del);

    // setEducationObject((current) => current.filter((el) => el.id) !== index)
    // const newEducation = setEducationObject((prevState) => prevState.filter((el) => el.id) !== del.id)
    // console.log(newEducation)

    // setEducationObject((educationObject) => educationObject.filter((el) => el.id === del.id))
    const educationremove = educationObject.filter((el) => el.id === del.id);
    console.log(educationremove);
    setEducationObject(educationremove);
  };

  const deleteEducationItemHandler = (id) => {
    console.log("cliked");
    console.log(id)
    // setEducationObject((prev) => prev.filter((el) => el.id !== id))
    // setEducationObject((prevState) => prevState.filter((el) => el.id === id))
    setEducationObject((current) => current.filter((el) => el.id !== id))
  };

  const educationInputHandler = (e, id) => {
    console.log(e.target.value)
    console.log(id)

    const foundIndex = educationObject.findIndex(x => x.id === id)
    console.log(foundIndex)

    const newVal = e.target.value
    const copy = [...educationObject]
    const newcopy = copy[foundIndex].val = e.target.value
    console.log(copy)
    console.log(newcopy)
    setEducationObject(copy)

    // const changeState = () => {
    //     setState(prevState => {...prevState, existingKey: 'new value'})
    //   } 


    //   setEducationObject(prevState => ({
    //       ...prevState,
    //       prevState[foundIndex].val newVal
    //   }))
      // setEducationObject((prevState) => prevState[foundIndex].val = newVal)
    // setEducationObject((prevState) => prevState[foundIndex].text = e.target.value)
    // educationObject[foundIndex].text = e.target.value
    // setEducationObject((prev) => prev[foundIndex].text = e.target.value)
    // pass to education render for right hand side, not made yet
  }


  const educationInputHandlerCourse = (e, id) => {
    const foundIndex = educationObject.findIndex(x => x.id === id)
    const copy = [...educationObject]
    copy[foundIndex].Course = e.target.value
    setEducationObject(copy)

  }


  const educationInputHandlerUniversity = (e, id) => {
    const foundIndex = educationObject.findIndex(x => x.id === id)
    const copy = [...educationObject]
    copy[foundIndex].University = e.target.value
    setEducationObject(copy)

  }

  const educationInputHandlerDate = (e, id) => {
    const foundIndex = educationObject.findIndex(x => x.id === id)
    const copy = [...educationObject]
    copy[foundIndex].Date = e.target.value
    setEducationObject(copy)
  }

  const educationInputHandlerDescription = (e, id) => {
    const foundIndex = educationObject.findIndex(x => x.id === id)
    const copy = [...educationObject]
    copy[foundIndex].Description = e.target.value
    setEducationObject(copy)
  }

  return (
    <div style={{display: "flex", flexDirection:  "column", width: "90%"}}>
      <h2 style={{paddingTop: "2rem"}}>Education</h2>
      <div>
        {educationObject.map((item, index) => {
          return (
            <EducationItem
              deleteEducationItemHandler={deleteEducationItemHandler}
              educationInputHandler={educationInputHandler}
              educationInputHandlerCourse={educationInputHandlerCourse}
              educationInputHandlerUniversity={educationInputHandlerUniversity}
              educationInputHandlerDate={educationInputHandlerDate}
              educationInputHandlerDescription={educationInputHandlerDescription}
              key={index}
              text={item.text}
              id={item.id}
            />
          );
        })}
      </div>
      <button style={{width: "5rem", marginTop: "1rem"}} onClick={addButtonHandler}>Add Education</button>

     
    </div>
    
  );
}

export default Education;
