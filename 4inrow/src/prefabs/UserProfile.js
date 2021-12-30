
// You can write more code here

/* START OF COMPILED CODE */

class UserProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// RightText
		const rightText = scene.add.container(160, 0);
		rightText.visible = false;
		this.add(rightText);

		// nameR
		const nameR = scene.add.image(0, 0, "Name");
		rightText.add(nameR);

		// textR
		const textR = scene.add.text(-70, 0, "", {});
		textR.setOrigin(0, 0.5);
		textR.text = "Harry";
		textR.setStyle({ "color": "#000", "fontSize": "35px", "fontStyle": "bold" });
		rightText.add(textR);

		// LeftText
		const leftText = scene.add.container(-160, 0);
		leftText.visible = false;
		this.add(leftText);

		// nameL
		const nameL = scene.add.image(0, 0, "Name");
		leftText.add(nameL);

		// textL
		const textL = scene.add.text(75, 0, "", {});
		textL.setOrigin(1, 0.5);
		textL.text = "Harry";
		textL.setStyle({ "align": "right", "color": "#000", "fontSize": "35px", "fontStyle": "bold" });
		leftText.add(textL);

		// profile
		const profile = scene.add.image(1, 1, "Profile");
		this.add(profile);

		// user
		const user = scene.add.image(0, 0, "user");
		user.scaleX = 0.3061;
		user.scaleY = 0.3061;
		this.add(user);

		this.rightText = rightText;
		this.textR = textR;
		this.leftText = leftText;
		this.textL = textL;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	rightText;
	/** @type {Phaser.GameObjects.Text} */
	textR;
	/** @type {Phaser.GameObjects.Container} */
	leftText;
	/** @type {Phaser.GameObjects.Text} */
	textL;

	/* START-USER-CODE */

	// Write your code here.
	setPlayerUI(onPlayer, playerName)
	{
		if(onPlayer)
		{
			this.leftText.visible = true;
			this.textL.text = playerName;
		}
		else
		{
			this.rightText.visible = true;
			this.textR.text = playerName;
		}
		this.sPlayerName = playerName;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
