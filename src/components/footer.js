import "../styles/style.css";
import facebookLogo from "../assets/logos/facebook.png";
import instagramLogo from "../assets/logos/instagram.png";
import tiktokLogo from "../assets/logos/tik-tok.png";
import youtubeLogo from "../assets/logos/social.png";

document.querySelector("#footer").innerHTML = `
  <div class="main-footer">
    <nav class="nav-footer">
      <ul class="button-list-footer">
        <li><a class="btn-navigation-footer" href="blog/index.html" >My Blog</a></li>
        <li><a class="btn-navigation-footer" href="gallery/index.html" >Gallery</a></li>
        <li><a class="btn-navigation-footer" href="socialnetworks/index.html" >My Channel</a></li>
      </ul>
    </nav>
    <div class="social-media">
        <h2 class="title-footer">Copyright 2023 El Kevin Viaja</h2>
        <div>
            <a target="_blank" href="https://www.instagram.com/kevinmorales.ceo/" ><img class="social-icon" src="${instagramLogo}" alt="instagram" width="50" height="50"></a>
            <a target="_blank" href="https://www.tiktok.com/@elkevin.viaja" ><img class="social-icon" src="${tiktokLogo}" alt="tiktok" width="50" height="50"></a>
            <a target="_blank" ><img class="social-icon" src="${youtubeLogo}" alt="youtube" width="50" height="50"></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=1096023994" ><img class="social-icon" src="${facebookLogo}" alt="facebook" width="50" height="50"></a>
        </div>
    </div>
    <div class="btn-support-block">
       
        <a href="#" class="btn-support" >Support me </a>
    </div>

  </div>
`;