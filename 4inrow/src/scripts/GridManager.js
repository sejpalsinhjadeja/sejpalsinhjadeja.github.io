class GridManager{

    static aPosPoints;

	constructor(aPosPoints) {
        GridManager.aPosPoints = aPosPoints;
    }

    static getNearestColumn(oCoinObj){
		var minDist = 2000;
		var nearestPos = 0;
		for(var i=0; i<7; i++){
			var tempDist = Phaser.Math.Distance.BetweenPoints(oCoinObj,GridManager.aPosPoints[6][i]);
			if(minDist>tempDist)
			{
				minDist = tempDist;
				nearestPos = i;
			}
		}
		return nearestPos;
	}

    static getColSpace(nColNo){
        for(var i=0; i<7; i++){
			if(GridManager.aPosPoints[i][nColNo].isFilled)continue;
            else{ break; }
		}
        return (7-i);
    }

    static getPosPoint(nRow,nCol){
        return GridManager.aPosPoints[nRow][nCol];
    }

	static isWon(nRowNum,nColNum,playerTurn){
		var vsx,hsy;
		if(nRowNum<3){ vsx = nRowNum+3; }
		if(nRowNum>=3){ vsx = nRowNum-3; }
		if(nColNum<3){ hsy = nColNum+3; }
		if(nColNum>=3){ hsy = nColNum-3; }

		var continueCounter = 0;

		// Vertical Up and Down check
		for (var i = 0;  i < 7; i++) {
			var posPoint;
			if (vsx > nRowNum) {
				if((vsx-i) < 0) break;
				posPoint = GridManager.getPosPoint(vsx - i, nColNum); 
			}
			else { 
				if((vsx+i) > 6) break;
				posPoint = GridManager.getPosPoint(vsx + i, nColNum); 
			}
			if (posPoint.isFilled && posPoint.playerTurnNo == playerTurn) {
				continueCounter++;
				if (continueCounter >= 4) { return true; }
			}
			else { continueCounter = 0; }
		}


		// Horizontal Right and left check
		continueCounter = 0;
		for (var i = 0;  i < 7; i++) {
			var posPoint;
			if (hsy > nColNum) {
				if((hsy-i) < 0) break;
				posPoint = GridManager.getPosPoint(nRowNum, hsy - i); 
			}
			else { 
				if((hsy+i) > 6) break;
				posPoint = GridManager.getPosPoint(nRowNum, hsy + i); 
			}
			if (posPoint.isFilled && posPoint.playerTurnNo == playerTurn) {
				continueCounter++;
				if (continueCounter >= 4) { return true; }
			}
			else { continueCounter = 0; }
		}


		// Diagonal
		continueCounter = 0;
		for (var i = 0;  i < 7; i++) {
			var posPoint;
			var nX,nY;
			if (vsx > nRowNum) { if((vsx-i) < 0) break; nX = vsx - i; }
			else { if((vsx+i) > 6) break; nX = vsx + i; }
			if (hsy > nColNum) { if((hsy-i) < 0) break; nY = hsy - i; }
			else { if((hsy+i) > 6) break; nY = hsy + i; }
			posPoint = GridManager.getPosPoint(nX, nY); 
			if (posPoint.isFilled && posPoint.playerTurnNo == playerTurn) {
				continueCounter++;
				if (continueCounter >= 4) { return true; }
			}
			else { continueCounter = 0; }
		}

		return false;
	}
}
