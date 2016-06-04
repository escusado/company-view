class UserTile extends NanoWidget {

  constructor (config) {
    super();

    var template = '';

    this.element.classList.add('user-tile');

    this.template = `
        <div class="user-background" style="background-image:url({{photo}})"></div>
        <div class="user-content">
          <div class="user-name">Daenerys Targaryen</div>
          <div class="user-thumb">Mechanical Engineer</div>
          <div class="workshops">
            <div class="item">
              {{workshops}}
            </div>
          </div>
        </div>
    `;


    template = config.lessons.map(function (workshop) {
      return '<div class="workshop-title">'+workshop+'</div>';
    }).join('');

    this.template = this.template.replace('{{photo}}', config.photo)
                                 .replace('{{username}}', config.username)
                                 .replace('{{profession}}', config.profession)
                                 .replace('{{workshops}}', template);

    this.element.innerHTML = this.template;

  }
}
