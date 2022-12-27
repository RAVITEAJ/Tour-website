import React from "react";
import "./Banner.css";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BedIcon from '@mui/icons-material/Bed';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="discover__group">
          <h1>discover</h1>
          <h1 className="city">your amazing city</h1>
          <p>
            Find great places to stay , food , shop , & visit from local experts
          </p>
        </div>
        <div className="banner__inputs">
          <div className="banner__what">
            <select name="what">
              <option value="what">what</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
            </select>
          </div>
          <div className="banner__what">
            <select name="where">
              <option value="what">where</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
            </select>
          </div>
        </div>
        <div className="search__btns">
          <a href="!#" className="btn search">
            Search
          </a>
          <h6>browse the highlight</h6>
        </div>
        <div className="banner__boxes">
            <div className="banner__img">
              <FastfoodIcon/>
              <h6>food</h6>
            </div>
            <div className="banner__img">
              <MedicationIcon/>
              <h6>medical</h6>
            </div>
            <div className="banner__img">
              <SettingsApplicationsIcon/>
              <h6>services</h6>
            </div>
            <div className="banner__img">
              <WorkIcon/>
              <h6>jobs</h6>
            </div>
            <div className="banner__img">
              <ShoppingBagIcon/>
              <h6>shopping</h6>
            </div>
            <div className="banner__img">
              <BedIcon/>
              <h6>hotels</h6>
            </div>
            <div className="banner__img">
              <ElectricCarIcon/>
              <h6>automotive</h6>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Banner;
