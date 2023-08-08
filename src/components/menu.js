import "../styles/style.css";
import { openMenuOptions, closeMenuOptions } from "../js/responsiveMenu";
let name ="El Kevin Viaja"
document.querySelector("#nav").innerHTML = `
  <div class="main-menu">
  <div class="logo-nav">
    <h2 class="title"> ${name}</h2>
    <img class="icon-logo" src="../assets/icons/worldwide.png" >
  </div>  
    <button type="submit" id="open" onclick="openMenuOptions()" class="nav-button">
      <img src="../assets/icons/menu.png" >
    </button>
    <button type="submit" id="close" onclick="closeMenuOptions()" class="nav-button">
      <img src="../assets/icons/close.png" >
    </button>
    <nav class="navigation">
      <ul class="button-list">
        <li><a class="btn-navigation" href="/index.html" >Home</a></li>
        <li><a class="btn-navigation" href="/blog/index.html" >My Blog</a></li>
        <li><a class="btn-navigation" href="/gallery/index.html" >Gallery</a></li>
        <li><a class="btn-navigation" href="/socialnetworks/index.html" >My Channel</a></li>
        <li><a href="/supportme/index.html" class="btn-support fix-distance" >Support me </a></li>
      </ul>
    </nav>
  </div>
`;
