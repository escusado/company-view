class CustomModal extends NanoWidget {
  _getHTML () {
    return `
        <div class="custom-modal">
          <div class="modal-content"></div>
          <div class="lightbox"></div>
        </div>
    `;
  }

  constructor () {
    super();
    this.modalContent = this.element.querySelector('.modal-content');
    this._bindEvents();
  }

  _bindEvents () {
    app.bind('show-modal', this._handleShowUserModal.bind(this));
  }

  _handleShowUserModal (ev) {
    this.modalContent.innerHTML = '';
    ev.data.render(this.modalContent);
    this.activate();
  }

}
