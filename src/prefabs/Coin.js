
// You can write more code here

/* START OF COMPILED CODE */

class Coin extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Red", frame);

		/* START-USER-CTR-CODE */

		this.oSceneObj = scene;
		this.oGameObj = this;
		this.setSize(this.width, this.height);
		this.setInteractive();
		this.oSceneObj.input.setDraggable(this);
		this.isMoveable = true;
		this.oSceneObj.input.on('drag', function (pointer, gameObject, dragX, dragY) {
			if (gameObject == this && this.isMoveable) {
				gameObject.x = dragX;
				if(this.x <= 130) { this.x = 130; }
				if(this.x >= 940) { this.x = 940; }
			}
		}, this);

		this.oSceneObj.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
			if (gameObject == this && this.isMoveable) {
				var nearestCol = GridManager.getNearestColumn(this.oGameObj);
				var emptySpace = GridManager.getColSpace(nearestCol);
				if(emptySpace>0)
				{
					this.isMoveable = false;
					var posObj = GridManager.getPosPoint(7-emptySpace,nearestCol);
					gameObject.x = posObj.x;
					gameObject.y = posObj.y;
					posObj.isFilled = true;
					posObj.playerTurnNo = this.oSceneObj.nPlayerTurnNo;
					posObj.placedCoin = this;
					this.oSceneObj.checkResult(7-emptySpace,nearestCol);
				}
				else{
					this.oSceneObj.setInfoMsgTimer("Column is full",1);
				}

			}
		}, this);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
