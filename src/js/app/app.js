class App extends NanoWidget {
  _getHTML () {
    return `
      <div class="app">
      </div>
    `;
  }

  setup () {
    // this.customModal = new CustomModal();
    // this.customModal.render(this.element);

    this.sidebar = new Sidebar();
    this.sidebar.render(this.element);

    this.content = new Content();
    this.content.render(this.element);
    this.content.setup();
  }
}
