import React from "react";
import { ProfileCon } from "./styled/Dashboard.styled";

const Profile = () => {
  return (
    <ProfileCon>
      <h2> Profile Settings</h2>
      <form>
        <div className="formContainer">
          <div className="formControl">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" placeholder="Simon" />
          </div>
          <div className="formControl">
            <label htmlFor="firstname">Last Name</label>
            <input type="text" id="firstname" placeholder="Daniel" />
          </div>
        </div>
        <div className="formContainer">
          <div className="formControl">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Simondaniel159@gmail.com"
            />
          </div>
          <div className="formControl">
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" id="tel" placeholder="+447 49064556443" />
          </div>
        </div>
        <div className="formContainer">
          <div className="formControl">
            <label htmlFor="address">Home Address 1</label>
            <input
              type="text"
              id="address"
              placeholder="44, Boulevard d’Alsace"
            />
          </div>
          <div className="formControl">
            <label htmlFor="address2">Home Address 2</label>
            <input type="text" id="address2" placeholder="Address" />
          </div>
        </div>
        <div className="formContainer">
          <div className="formControl">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="France" />
          </div>
          <div className="formControl">
            <label htmlFor="code">Postal Code </label>
            <input type="text" id="code" placeholder="69200" />
          </div>
        </div>
        <div className="formContainer">
          <div className="formControl">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Manosque" />
          </div>
          <div className="formControl">
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="Lorraine" />
          </div>
        </div>
        <div className="button">
          <button className="btn">Save Changes</button>
        </div>
      </form>
    </ProfileCon>
  );
};

export default Profile;
