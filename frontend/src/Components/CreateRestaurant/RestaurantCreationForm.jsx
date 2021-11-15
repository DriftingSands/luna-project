import React, { useState, useEffect } from 'react';
import { RestaurantCreationFormMainCont } from './RestaurantCreationFormStyles';


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
    const [avatarURL, setAvatarURL] = useState("");

    let fileRefAvatar = React.createRef()

    const handleImageUpload = (e) => {
        fileRefAvatar = e.target.files[0]
        const fileRefAvatarURL = URL.createObjectURL(fileRefAvatar)
        setAvatarURL(fileRefAvatarURL)
    }


    const submitForm = e => {
        e.preventDefault();
        console.log(name, category, country, street, city, zip, website, phone, email, opening, pricelevel, fileRefAvatar.current.files[0]);
    }


    return (
        <RestaurantCreationFormMainCont>
            <div className='formTitle'>CREATE NEW RESTAURANT</div>
            <div className='titleUnderline' />
            <form className='form' onSubmit={submitForm}>
                <div className='basic'>
                    <div className='basicBlock1'> Basic </div>
                    <div className='basicBlock2'>
                        <label id='basic-col1'>
                            <div> Name*{" "} </div>
                            <input 
                                className='inputBox' 
                                type="text" 
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                                name="name"
                                required
                            />
                        </label>
                        <label id='basic-col2'>
                            <div> Category*{" "} </div>
                            <select 
                                className="selectBox"
                                // type="text" 
                                onChange={(e)=>setCategory(e.target.value)}
                                value={category}
                                name="category"
                            >
                                <option>Swiss</option>
                                <option>Italian</option>
                                <option>French</option>
                                <option>Indian</option>
                                <option>American</option>
                                <option>Turkish</option>
                                <option>Caribbean</option>
                            </select>
                        </label>
                        <label id='basic-col3'>
                            <div> Country*{" "} </div>
                            <select 
                                className="selectBox"
                                type="text" 
                                onChange={(e)=>setCountry(e.target.value)}
                                value={country}
                                name="country"
                                required
                            >
                            <option>Switzerland</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className='address'>
                    <div className='addressBlock1'> Address </div>
                    <div className='addressBlock2'>
                        <label id='address-col1'>
                            <div> Street* {" "} </div>
                            <input 
                                type="text" 
                                onChange={(e)=>setStreet(e.target.value)}
                                value={street}
                                name="street"
                                required
                            />
                        </label>
                        <label id='address-col2'>
                            <div> City*{" "} </div>
                            <input id='input'
                                type="text" 
                                onChange={(e)=>setCity(e.target.value)}
                                value={city}
                                name="city"
                                required
                            />
                        </label>
                        <label id='address-col3'>
                            <div> Zip {" "} </div>
                            <input 
                                type="number" 
                                onChange={(e)=>setZip(e.target.value)}
                                value={zip}
                                name="zip"
                            />
                        </label>
                    </div>
                </div>

                    <div className='contact'>
                        <div className='contactBlock1'> Contact </div>
                        <div className='contactBlock2'>
                            <label id='contact-col1'>
                                <div> Website {" "} </div>
                                <input 
                                    type="text" 
                                    onChange={(e)=>setWebsite(e.target.value)}
                                    value={website}
                                    name="website"
                                />
                            </label>
                            <label id='contact-col2'>
                                <div> Phone* {" "} </div>
                                <input 
                                    type="phone" 
                                    onChange={(e)=>setPhone(e.target.value)}
                                    value={phone}
                                    name="phone"
                                    required
                                />
                            </label>
                            <label id='contact-col3'>
                                <div> Email {" "} </div>
                                <input 
                                    type="email" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                    name="email"
                                />
                            </label>
                        </div>
                    </div>

                <div className="details">
                    <div className='detailsBlock1'> Details </div>
                    <div className='detailsBlock2'>
                        <label id='details-col1'>
                            <div> Opening hours* {" "} </div>
                            <select 
                                type="text" 
                                onChange={(e)=>setOpening(e.target.value)}
                                value={opening}
                                name="opening"
                            >
                                <option>Lunch only</option>
                                <option>Dinner only</option>
                                <option>Both Lunch & Dinner</option>
                            </select>
                        </label>
                        <label id='details-col2'>
                            <div> Price level {" "} </div>
                            <select 
                                // type="text" 
                                onChange={(e)=>setPricelevel(e.target.value)}
                                value={pricelevel}
                                name="pricelevel"
                            >
                                <option>$</option>
                                <option>$$</option>
                                <option>$$$</option>
                                <option>$$$$</option>
                                <option>$$$$$</option>
                            </select>
                        </label>                 
                        <label id='uploadImgLabel' htmlFor='uploadImg' >
                            <div> Image {" "} </div>
                            {/* formData */}
                            <input placeholder='Choose File...' id="uploadImg" type="file" accept="image/png, image/jpeg" ref={ fileRefAvatar } onChange={handleImageUpload} />
                        </label>
                            {/* <input type="submit" value="Upload with formData" /> */}
                    </div>
                </div>
                <div id="createButtonContainer">
                    <input id='createBtn' type='submit' value='Create'/>
                </div>

            </form>
            {/* <img id="restaurant-img" src={ avatarURL } alt="resto-avatar" width="200px" /> */}
        </RestaurantCreationFormMainCont>
    )

}
export default RestaurantCreationForm
