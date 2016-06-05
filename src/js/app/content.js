class Content extends NanoWidget {
  _getHTML () {
    return `
    <div class="content">

      <div class="users-wrapper">
        <div class="title">User List</div>
        <div class="user-list">

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
        profession: 'Mechanical Engineer',
        photo: '/img/danny.jpg',
        lessons: [
          'Types of frames for drones',
          'Motor assembly',
          'Chassis repair'
        ]
      },
      {
        username: 'Jhon Snow',
        profession: 'TV Technician',
        photo: '/img/jon-snow.jpg',
        lessons: [
          'Types of frames for drones',
          'Chassis repair'
        ]
      },
      {
        username: 'Tyrion Lannister',
        profession: 'Cobol Engineer',
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
