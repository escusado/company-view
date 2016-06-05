'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomModal = function (_NanoWidget) {
  _inherits(CustomModal, _NanoWidget);

  _createClass(CustomModal, [{
    key: '_getHTML',
    value: function _getHTML() {
      return '\n        <div class="custom-modal">\n          <div class="modal-content"></div>\n          <div class="lightbox"></div>\n        </div>\n    ';
    }
  }]);

  function CustomModal() {
    _classCallCheck(this, CustomModal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CustomModal).call(this));

    _this.modalContent = _this.element.querySelector('.modal-content');
    _this._bindEvents();
    return _this;
  }

  _createClass(CustomModal, [{
    key: '_bindEvents',
    value: function _bindEvents() {
      app.bind('show-modal', this._handleShowUserModal.bind(this));
    }
  }, {
    key: '_handleShowUserModal',
    value: function _handleShowUserModal(ev) {
      this.modalContent.innerHTML = '';
      ev.data.render(this.modalContent);
      this.activate();
    }
  }]);

  return CustomModal;
}(NanoWidget);