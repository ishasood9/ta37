class Game {
  constructor() {}
  //ta1
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //ta3
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {}
}
