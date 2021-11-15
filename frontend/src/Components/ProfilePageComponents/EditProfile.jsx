import React, { useState } from "react";
import { EditProfileFormMainCont } from "./EditProfileStyle";
import axios from "axios";

const EditProfile = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [thingsILove, setThingsILove] = useState("");
    const [description, setDescription] = useState("");
    
    const editUserData = async (formdata) => {
        const url =
        "https://luna2.propulsion-learn.ch/backend/api/users/me/";

        const config = {
        headers: {
            // "Content-Type": "application/json",
            // "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MzI1NDc4LCJqdGkiOiJjYmZkYWFiNjFiNTY0OGMyYTc4MDYyYTU2NjEyMzNlNiIsInVzZXJfaWQiOjV9.797alo40Q6tj5AhaHltiz5BZXtKsjpMuDaXkgnjRgP8`,
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        };

        const resp = await axios.patch(url, formdata, config);
        return resp;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        
        let formdata = new FormData();
        formdata.append("name", userName);
        formdata.append("firstName", firstName);
        formdata.append("lastName", lastName);
        formdata.append("email", email);
        formdata.append("location", location);
        formdata.append("phone", phone);
        formdata.append("thingsILove", thingsILove);
        formdata.append("description", description);
    
        try {
          const resp = await editUserData(formdata);
          if (resp.status === 201) {
            console.log("Data was successfully edited.");
          }
        } catch (err) {
          if (err) {
            alert(err.response);
          }
        }
      };
    
    return(
    <EditProfileFormMainCont>
      <div className="formTitle">EDIT USERPROFILE</div>
      <div className="titleUnderline" />
      <form className="form" onSubmit={submitForm}>
        <div className="basic">
          <div className="basicBlock2">
            <label id="input-block">
              <div> Username </div>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                name="name"
                required
              />
            </label>
            <label id="input-block">
              <div> Firstname </div>
              <input
                className="inputBox"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                name="firstName"
              />
            </label>
            <label id="input-block">
              <div> Lastname </div>
              <input
                className="inputBox"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                name="lastName"
              />
            </label>
            <label id="input-block">
              <div> Email </div>
              <input
                className="inputBox"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </label>
            <label id="input-block">
              <div> Location </div>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                name="location"
              />
            </label>
            <label id="input-block">
              <div> Phone </div>
              <input
                className="inputBox"
                type="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                required
              />
            </label>
            <label id="input-block">
              <div> Things I love </div>
              <input
                className="inputBox"
                type="thingsILove"
                onChange={(e) => setThingsILove(e.target.value)}
                value={thingsILove}
                name="thingsILove"
              />
            </label>
            <label id="inputDesc-block">
              <div> Description </div>
              <input
                className="inputBoxDescription"
                type="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
              />
            </label>
          </div>
        </div>
        <div className="createButtonContainer">
          <input id="bttnSave" type="submit" value="Save" />
        </div>
      </form>
    </EditProfileFormMainCont>
  );
}

export default EditProfile