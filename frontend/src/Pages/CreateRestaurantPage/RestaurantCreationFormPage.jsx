import React, { useState } from "react";
import { RestaurantCreationFormMainCont } from "./RestaurantCreationFormPageStyles";
import axios from "axios";

const RestaurantCreationForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [opening, setOpening] = useState("");
  const [pricelevel, setPricelevel] = useState("");
  const [avatarFile, setAvatarFile] = useState();

  const handleImageUpload = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const createRestaurant = async (formdata) => {
    const url =
      "https://luna2.propulsion-learn.ch/backend/api/restaurants/new/";

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const resp = await axios.post(url, formdata, config);
    return resp;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(avatarFile)
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("category", category);
    formdata.append("country", country);
    formdata.append("street", street);
    formdata.append("city", city);
    formdata.append("zip", zip);
    formdata.append("website", website);
    formdata.append("phone", phone);
    formdata.append("email", email);
    formdata.append("opening_hours", opening);
    formdata.append("price_level", pricelevel);
    formdata.append("image", avatarFile);

    try {
      const resp = await createRestaurant(formdata);
      if (resp.status === 201) {
        console.log("Restaurant successfully created.");
      }
    } catch (err) {
      if (err) {
        console.log(err.response);
      }
    }
  };

  return (
    <RestaurantCreationFormMainCont>
      <div className="formTitle">CREATE NEW RESTAURANT</div>
      <div className="titleUnderline" />
      <form className="form" onSubmit={submitForm}>
        <div className="basic">
          <p> Basic </p>
          <div className="basicBlock2">
            <label>
              <p> Name* </p>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                required
              />
            </label>
            <label>
              <p> Category* </p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                name="category"
                placeholder="Category"
                className={category ? "notSelected" : ""}
              >
                <option selected hidden value="notSelected">
                  Select a value...
                </option>
                <option value="1">Swiss</option>
                <option value="2">Italian</option>
                <option value="3">French</option>
                <option value="4">German</option>
                <option value="5">Indian</option>
                <option value="6">American</option>
                <option value="7">Turkish</option>
                <option value="8">Greek</option>
                <option value="9">Caribbean</option>
                <option value="10">Belgian</option>
                <option value="11">Austrian</option>
                <option value="12">British</option>
              </select>
            </label>
            <label>
              <p> Country* </p>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                name="country"
                required
                className={country ? "notSelected" : ""}
              >
                <option selected hidden value="notSelected">
                  Select a value...
                </option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </label>
          </div>
        </div>

        <div className="basic">
          <p> Address </p>
          <div className="basicBlock2">
            <label>
              <p> Street* </p>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                name="street"
                required
              />
            </label>
            <label>
              <p> City* </p>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                name="city"
                required
              />
            </label>
            <label>
              <p> Zip </p>
              <input
                className="inputBox"
                type="number"
                onChange={(e) => setZip(e.target.value)}
                value={zip}
                name="zip"
              />
            </label>
          </div>
        </div>

        <div className="basic">
          <p> Contact </p>
          <div className="basicBlock2">
            <label>
              <p> Website </p>
              <input
                className="inputBox"
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
                name="website"
              />
            </label>
            <label>
              <p> Phone* </p>
              <input
                className="inputBox"
                type="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                required
              />
            </label>
            <label>
              <p> Email </p>
              <input
                className="inputBox"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </label>
          </div>
        </div>

        <div className="basic">
          <p> Details </p>
          <div className="basicBlock2">
            <label>
              <p> Opening hours* </p>
              <select
                type="text"
                onChange={(e) => setOpening(e.target.value)}
                value={opening}
                name="opening"
                className={opening ? "notSelected" : ""}
              >
                <option selected hidden value="notSelected">
                  Select a value...
                </option>
                <option value="Lunch only">Lunch only</option>
                <option value="Dinner only">Dinner only</option>
                <option value="Both Lunch & Dinner">Both Lunch & Dinner</option>
              </select>
            </label>
            <label>
              <p> Price level </p>
              <select
                onChange={(e) => setPricelevel(e.target.value)}
                value={pricelevel}
                name="pricelevel"
                className={pricelevel ? "notSelected" : ""}
              >
                <option selected hidden value="notSelected">
                  Select a value...
                </option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </label>

            <div className="uploadContainer">
              <p> Image </p>
              <input
                id="uploadImg"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleImageUpload}
              />
              {avatarFile ? (
                <label id="uploadImgLabel" htmlFor="uploadImg">
                  FILE SELECTED
                </label>
              ) : (
                <label id="uploadImgLabel" htmlFor="uploadImg">
                  CHOOSE A FILE...
                </label>
              )}
              {avatarFile ? (
                <p className="uploadedName">{avatarFile.name}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div id="createButtonContainer">
          <input id="createBtn" type="submit" value="CREATE" />
        </div>
      </form>
    </RestaurantCreationFormMainCont>
  );
};

export default RestaurantCreationForm;
