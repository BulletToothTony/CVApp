import React, { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";

function Experience(props) {
  const [experienceObject, setExperienceObject] = useState([
    { id: 0, title: "Software Engineer", val: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est.", company: "Google", date: "2018-Present" },
    // { id: 1, text: "job 2", val: "CAPITALISM" },
    // { id: 2, text: "job 3", val: "LOL" },
  ]);

  useEffect(() => {
    props.setExperienceHandler(experienceObject)
  }, [props, experienceObject])

  const addExperienceButtonHandler = () => {
    const copy = [...experienceObject];
    copy.push({ id: Math.random(), text: "", val: "" });
    console.log(copy);
    setExperienceObject(copy);
  };

  const deleteExperienceHandler = (id) => {
    console.log(id);
    setExperienceObject((current) => current.filter((el) => el.id !== id));
  };

  const experienceInputHandler = (e, id, valToChange) => {
    console.log(e.target.value, id);
    console.log(experienceObject)
    const foundIndex = experienceObject.findIndex(x => x.id === id)
    const newVal = valToChange
    console.log(newVal)

    const copy = [...experienceObject]
    copy[foundIndex].val = e.target.value
    setExperienceObject(copy)



  };

  const experienceInputHandlerDate = (e, id) => {
    const foundIndex = experienceObject.findIndex(x => x.id === id)
    const copy = [...experienceObject]
    copy[foundIndex].date = e.target.value
    setExperienceObject(copy)

  }

  const experienceInputHandlerCompany = (e, id) => {
    const foundIndex = experienceObject.findIndex(x => x.id === id)
    const copy = [...experienceObject]
    copy[foundIndex].company = e.target.value
    setExperienceObject(copy)
  }

  const experienceInputHandlerTitle = (e, id) => {
    const foundIndex = experienceObject.findIndex(x => x.id === id)
    const copy = [...experienceObject]
    copy[foundIndex].title = e.target.value
    setExperienceObject(copy)
  }

  const experienceInputHandlerDescription = (e, id) => {
    const foundIndex = experienceObject.findIndex(x => x.id === id)
    const copy = [...experienceObject]
    copy[foundIndex].val = e.target.value
    setExperienceObject(copy)
  }



  return <div style={{display: "flex", flexDirection:  "column", width: "90%"}}>
      <h2>Work Experience</h2>
      {experienceObject.map((item, index) => {
          return (
            <ExperienceItem
            deleteExperienceHandler={deleteExperienceHandler}
            experienceInputHandler={experienceInputHandler}
            experienceInputHandlerDate={experienceInputHandlerDate}
            experienceInputHandlerCompany={experienceInputHandlerCompany}
            experienceInputHandlerTitle={experienceInputHandlerTitle}
            experienceInputHandlerDescription={experienceInputHandlerDescription}
            addExperienceButtonHandler={addExperienceButtonHandler}
              key={index}
              text={item.text}
              id={item.id}
            />
          );
        })}
        {/* <div style={{width: '50%'}}>Education rendered
        {experienceObject.map((item, index) => {
            return (
                <h1 key={index}>{item.val}</h1>
            )
        })}
      
      </div> */}
                 <button style={{width: "5rem", marginTop: "1rem"}} onClick={addExperienceButtonHandler}>Add experience</button>

     
  </div>;
}

export default Experience;
