'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserTile = function (_NanoWidget) {
  _inherits(UserTile, _NanoWidget);

  function UserTile(config) {
    _classCallCheck(this, UserTile);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserTile).call(this, config));

    _this.config = config;

    var template = '';

    _this.element.classList.add('user-tile');

    _this.template = '\n        <div class="user-background" style="background-image:url({{photo}})"></div>\n        <div class="user-content">\n          <div class="user-name">{{username}}</div>\n          <div class="user-thumb">{{profession}}</div>\n          <div class="workshops">\n            <div class="item">\n              {{workshops}}\n            </div>\n          </div>\n        </div>\n    ';

    template = config.lessons.map(function (workshop) {
      return '<div class="workshop-title">' + workshop + '</div>';
    }).join('');

    _this.template = _this.template.replace('{{photo}}', config.photo).replace('{{username}}', config.username).replace('{{profession}}', config.profession).replace('{{workshops}}', template);

    _this.element.innerHTML = _this.template;

    _this._bindEvents();
    return _this;
  }

  _createClass(UserTile, [{
    key: '_bindEvents',
    value: function _bindEvents() {
      this.element.addEventListener('click', this._handleClick.bind(this));
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      // app.dispatch('show-modal', {data: new UserDetail(this.config)}); 
    }
  }]);

  return UserTile;
}(NanoWidget);