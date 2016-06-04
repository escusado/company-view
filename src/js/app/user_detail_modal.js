class UserDetailModal extends NanoWidget {
  _getHTML () {
    return `
        <div class="user-detail-modal">
          sup
        </div>
    `;
  }

  constructor () {
    super();
  }

  _bindEvents () {
    app.bind('show-user-modal', this._handleShowUserModal.bind(this));
  }

  _handleShowUserModal () {
    this.activate();
  }

}
