/*
 * @Author: Dell_Di
 * @Date: 2020-01-07 09:23:35
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-15 16:06:10
 * @FilePath: \myReact\src\views\pink-movie\index.js
 */
import React, { useState, useEffect } from "react";

$(".show-btn").click(function() {
  $(".sm-menu").fadeToggle("fast");
});
const SelMovie = () => {
  return (
    <div className="middle">
      <div className="sm-container">
        <i className="show-btn fas fa-user"></i>
        <div className="sm-menu">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
