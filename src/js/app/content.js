class Content extends NanoWidget {
  _getHTML () {
    return `
    <div class="content">

      <div class="users-wrapper">
        <div class="title">User List</div>
        <div class="user-list">

        <!--  <div class="user-tile">
            <div class="user-background" style="background-image:url(/img/danny.jpg)"></div>
            <div class="user-content">
              <div class="user-name">Daenerys Targaryen</div>
              <div class="user-thumb">Mechanical Engineer</div>
              <div class="workshops">
                <div class="item">
                  <div class="workshop-title">Types of frames for drones</div>
                  <div class="workshop-title">Motor assembly</div>
                </div>
              </div>
            </div>
          </div>

          <div class="user-tile">
            <div class="user-background" style="background-image:url(/img/jon-snow.jpg)"></div>
            <div class="user-content">
              <div class="user-name">Jhon Snow</div>
              <div class="user-thumb">TV Technician</div>
              <div class="workshops">
                <div class="item">
                  <div class="workshop-title">Motor assembly</div>
                </div>
              </div>
            </div>
          </div>

          <div class="user-tile">
            <div class="user-background" style="background-image:url(/img/tyrion.jpg)"></div>
            <div class="user-content">
              <div class="user-name">Tyrion Lannister</div>
              <div class="user-thumb">Cobol Engineer</div>
              <div class="workshops">
                <div class="item">
                  <div class="workshop-title">Types of frames for drones</div>
                  <div class="workshop-title">Motor assembly</div>
                  <div class="workshop-title">Chassis repair</div>
                </div>
              </div>
            </div>
          </div>-->

        </div>
      </div>

    </div>
    `;
  }

  setup () {
    this.userList = this.element.querySelector('.user-list');

    var data = [
      {
        username: 'Daenerys Targaryen',
        profesion: 'Mechanical Engineer',
        photo: '/img/danny.jpg',
        lessons: [
          'Types of frames for drones',
          'Motor assembly',
          'Chassis repair'
        ]
      },
      {
        username: 'Jhon Snow',
        profesion: 'TV Technician',
        photo: '/img/jon-snow.jpg',
        lessons: [
          'Types of frames for drones',
          'Chassis repair'
        ]
      },
      {
        username: 'Tyrion Lannister',
        profesion: 'Cobol Engineer',
        photo: '/img/tyrion.jpg',
        lessons: [
          'Types of frames for drones',
          'Chassis repair'
        ]
      }
    ];

    data.forEach(function (user) {
      var userTile = new UserTile(user);
      userTile.render(this.userList);
    }.bind(this));

  }
}
