class Sidebar extends NanoWidget {
  _getHTML () {
    return `
        <div class="sidebar">

          <div class="logo">
            <a href="#">
              <img src="/img/Skill_up.svg" alt="">
            </a>
          </div>
          <div class="meta"></div>

          <div class="menu">
            <div class="navigation-item users">
              <a href="#">Users</a>
            </div>
            <div class="navigation-item users">
              <a href="#">Workshops</a>
            </div>
          </div>

        </div>
    `;
  }
}
