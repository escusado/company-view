class UserDetail extends NanoWidget {

  constructor (config) {
    super(config);

    var template = '';

    this.element.classList.add('user-detail');

    this.template = `
          <div class="user-background" style="background-image:url({{photo}})"></div>
          <div class="user-name">{{username}}</div>
          <div class="user-thumb">{{profession}}</div>
          <div class="workshops">
            <div class="item">
              {{workshops}}
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
