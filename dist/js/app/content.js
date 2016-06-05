'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_NanoWidget) {
  _inherits(Content, _NanoWidget);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
  }

  _createClass(Content, [{
    key: '_getHTML',
    value: function _getHTML() {
      return '\n    <div class="content">\n\n      <div class="users-wrapper">\n        <div class="title">User List</div>\n        <div class="user-list">\n\n        </div>\n      </div>\n\n    </div>\n    ';
    }
  }, {
    key: 'setup',
    value: function setup() {
      this.userList = this.element.querySelector('.user-list');

      var data = [{
        username: 'Daenerys Targaryen',
        profession: 'Mechanical Engineer',
        photo: '/img/danny.jpg',
        lessons: ['Types of frames for drones', 'Motor assembly', 'Chassis repair']
      }, {
        username: 'Jhon Snow',
        profession: 'TV Technician',
        photo: '/img/jon-snow.jpg',
        lessons: ['Types of frames for drones', 'Chassis repair']
      }, {
        username: 'Tyrion Lannister',
        profession: 'Cobol Engineer',
        photo: '/img/tyrion.jpg',
        lessons: ['Types of frames for drones', 'Chassis repair']
      }];

      data.forEach(function (user) {
        var userTile = new UserTile(user);
        userTile.render(this.userList);
      }.bind(this));
    }
  }]);

  return Content;
}(NanoWidget);