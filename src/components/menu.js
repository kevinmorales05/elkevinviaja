import "../styles/style.css";

document.querySelector("#nav").innerHTML = `
  <div class="main-menu">
    <h2 class="title"> El Kevin Viaja</h2>
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


