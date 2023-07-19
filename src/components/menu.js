import "../styles/style.css";

document.querySelector("#nav").innerHTML = `
  <div class="main-menu">
    <h2 class="title"> El Kevin Viaja</h2>
    <nav class="navigation">
      <ul class="button-list">
        <li><a class="btn-navigation" href="/index.html" >Home</a></li>
        <li><a class="btn-navigation" href="/src/pages/Blog/blog.html" >My Blog</a></li>
        <li><a class="btn-navigation" href="/src/pages/Gallery/gallery.html" >Gallery</a></li>
        <li><a class="btn-navigation" href="/src/pages/SocialNetworks/social.html" >My Channel</a></li>
        <li><a href="/src/pages/SupportMe/supportme.html" class="btn-support fix-distance" >Support me </a></li>
      </ul>
    </nav>
  </div>
`;

setupCounter(document.querySelector("#counter"));
