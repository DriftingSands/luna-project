import React from "react";
import { LocationInformationMain } from "./LocationInformationStyles";
import pin from "../../assets/svgs/pin.svg";
import phone from "../../assets/svgs/phone.svg";
import web from "../../assets/svgs/web.svg";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const position = [47.3778454, 8.5377305];

export default function LocationInformation() {
  return (
    <LocationInformationMain>
      <div className="TopDiv">
        <Map height={300} defaultCenter={position} defaultZoom={14}>
          <Marker width={50} anchor={position} color="#E47D31" hover={false} />
          <ZoomControl />
        </Map>
      </div>
      <div className="BottomDiv">
        <div className="address">
          <img src={pin} alt="Location Pin" height="26" />
          <a href={"geo:" + position}>Bahnhofstrasse 106, 8001 Zürich</a>
        </div>
        <div className="phone">
          <img src={phone} alt="Phone Icon" height="26" />
          <a href="tel:+41 44 211 53 72">+41 44 211 53 72</a>
        </div>
        <div className="website">
          <img src={web} alt="Web Icon" height="26" />
          <a href="https://laederach.com">laederach.com</a>
        </div>
      </div>
    </LocationInformationMain>
  );
}
