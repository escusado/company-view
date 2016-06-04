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
            <div class="item users">Users</div>
            <div class="item users">Workshops</div>
          </div>

        </div>
    `;
  }
}
