import React, { useRef, useState } from "react";
import styles from "./Main.module.css";
import Education from "./Education";
import EducationItem from "./EducationItem";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print'

function Main(props) {

    

    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
      });

      if (props.print === true) {
        handlePrint()
    }
  const [personalInfo, setPersonalInfo] = useState({
    FirstName: "John",
    LastName: "Doe",
    Title: "Software Engineer",
    Address: "123 Fake Street",
    PhoneNumber: "999-999-999",
    Email: "JohnDoe@gmail.com",
    Info: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
  });

  const [experienceObjectHigher, setExperienceObjectHigher] = useState([]);
  const [educationObjectHigher, setEducationObjectHigher] = useState([]);

  const setInfo = (e, targetKey) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [targetKey]: e.target.value,
    }));
    console.log(targetKey, e.target.value);
  };

  const setPersonalInfoHandler = (e, target) => {
    console.log(e.target.value, target);
    setPersonalInfo((prev) => ({
      ...prev,
      [target]: e.target.value,
    }));
  };

  const setExperienceHandler = (obj) => {
    setExperienceObjectHigher(obj);
    console.log(experienceObjectHigher);
  };

  const setEducationHandler = (obj) => {
    setEducationObjectHigher(obj);
    console.log(educationObjectHigher);
  };

  //   console.log(personalInfo);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <div className={styles.MainDiv}>
          {/* Div Input Form */}
          <PersonalInfo
            setInfo={setInfo}
            setPersonalInfoHandler={setPersonalInfoHandler}
          />
          <Experience setExperienceHandler={setExperienceHandler} />
          <Education
            className={styles.leftEducation}
            setEducationHandler={setEducationHandler}
          />
        </div>

        <div ref={componentRef} className={styles.MainDiv}>
            {/* <button onClick={handlePrint}>Print CV</button> */}
          {/* Div Render View */}
          <div style={{ display: "flex", gap: "4rem" }}>
            <div>
              <h1
                style={{
                  fontSize: "2.25rem",
                  color: "#195c70",
                  textTransform: "uppercase",
                }}
              >
                {personalInfo.FirstName} {personalInfo.LastName}
              </h1>
              <h2>{personalInfo.Title}</h2>
            </div>
            <div className={styles.ContactDiv}>
              <div>
                {" "}
                <p>
                  {personalInfo.Address} <FaAddressCard />{" "}
                </p>{" "}
              </div>
              <div>
                {" "}
                <p>
                  {personalInfo.PhoneNumber} <FaPhoneSquare />
                </p>
              </div>
              <div>
                <p>
                  {personalInfo.Email} <FaEnvelope />
                </p>{" "}
              </div>
            </div>
          </div>
          <div style={{ padding: "1rem" }}>{personalInfo.Info}</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <h2>Work Experience</h2>
            {experienceObjectHigher.map((item) => {
              return (
                <div key={item.id} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4>{item.title}</h4>
                    <div>
                      {item.company} {item.date}
                    </div>
                  </div>
                  {/* {item.val} {item.date} {item.title} {item.company} */}
                  <div style={{ padding: "1rem" }}>{item.val}</div>

                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <h2>Education</h2>
            {educationObjectHigher.map((item) => {
              return (
                //   <p key={item.id}>{item.val}</p>

                <div key={item.id} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4>{item.Course}</h4>
                    
                    <div>{item.University} {item.Date}</div>
                  </div>

                  <div style={{ padding: "1rem" }}>{item.Description}</div>

                  {/* {item.val} {item.date} {item.title} {item.company} */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
