
function drawRectangle() {
  let height = Number(prompt("Height: "));
  let width = Number(prompt("Width: "));
  let x = Number(prompt("X: "));
  let y = Number(prompt("Y: "));

  let c = document.getElementById("canvas2");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(x) || Number.isNaN(y)) {
    alert("One of your inputs is not a number.");
  } else if (width > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (height > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if ((width + x) > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if ((height + y) > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else {
    ctx.strokeRect(x, y, width, height);
  }
}


function drawTriangle() {                                                           
  let c = document.getElementById("canvas4");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let s1 = Number(prompt("Side 1: "));
  let s2 = Number(prompt("Side 2: "));
  let s3 = Number(prompt("Side 3: "));

  if (Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3)) {
    alert("One of your inputs is not a number.");
  } else if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) {
      let side1 = Math.min(s1, s2, s3);
      let side3 = Math.max(s1, s2, s3);
      let side2 = (s1 + s2 + s3) - side1 - side3;

      if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) {
        let x = 10;
        let y = 10;

        if ((y + side1) > 511 || (x + side2) > 1023) {
          alert("The triangle will not fit on the canvas.");
        } else {
          ctx.beginPath();

          ctx.moveTo(x, y);
          ctx.lineTo(x, y + side1);
          ctx.lineTo(x + side2, y + side1);
          ctx.lineTo(x, y);

          ctx.closePath();
          ctx.stroke();
        }
      } else {
        alert("This is not a valid right triangle.");
      }
  } else {
    alert("That is not a valid right triangle.");
  }
}

/*
 * Smile. SOLUTION.
 */

function drawSmileyFace() {
  let c = document.getElementById("canvas5");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let radius = Number(prompt("Radius: "));

  if (Number.isNaN(radius)) {
    alert("Your input is not a number.");
  } else if (radius < 1) {
    alert("Your radius is too small.");
  } else if ((radius * 2 + 10) > 511) {
    alert("The smiley face will not fit on the canvas.");
  } else {
    let faceX = radius + 10;
    let faceY = radius + 10;

    ctx.beginPath();

    ctx.arc(faceX, faceY, radius, 0, Math.PI * 2, true);
    ctx.moveTo(faceX + radius - radius * 0.3, faceY);
    ctx.arc(faceX, faceY, radius * 0.7, 0, Math.PI, false);
    ctx.moveTo(faceX - radius * 0.35 + radius * 0.1, faceY - radius * 0.5);
    ctx.arc(faceX - radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);
    ctx.moveTo(faceX + radius * 0.35 + radius * 0.1, faceY - radius * 0.5);
    ctx.arc(faceX + radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.stroke();
  }
}


function drawHouse() {
  let c = document.getElementById("canvas9");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let house = prompt("House Color: ");
  let door = prompt("Front Door Color: ");

  if ((house !== "blue"   &&
       house !== "brown"  &&
       house !== "green"  &&
       house !== "orange" &&
       house !== "purple" &&
       house !== "red"    &&
       house !== "yellow") ||
      (door !== "blue"   &&
       door !== "brown"  &&
       door !== "green"  &&
       door !== "orange" &&
       door !== "purple" &&
       door !== "red"    &&
       door !== "yellow")) {

    alert("One of your colors is not supported.");
  } else {
    let width = c.width - 300;
    let height = (c.height / 5) * 3;
    let x = 150;
    let y = c.height - 10 - height;

    // draw the frame
    ctx.fillStyle = house;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);

    // draw the roof
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    ctx.lineTo(x, y);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    // ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();

    // draw the door
    ctx.fillStyle = "gold";
    ctx.fillRect(c.width / 2 - 50, (c.height / 5) * 4 - 9, 100, 150);
    ctx.beginPath();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.fillStyle = door;
    ctx.fill();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.stroke();

    // draw windows
    ctx.fillStyle = "lightBlue";
    ctx.fillRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);

    ctx.strokeRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);
  }
}


// Constants for the program
var TOP_GAP = 40;
var BOTTOM_GAP = 40;
var BORDER_GAP = 60;
var NUM_BITS = 4;
var BIT_SPACING = 10;
var BIT_WIDTH = (getWidth() - BORDER_GAP*2 - BIT_SPACING*(NUM_BITS)) / NUM_BITS;
var BIT_HEIGHT = 30;
var BIT_TO_DECIMAL_GAP = 20;
var MESSAGE_TO_POINTS_GAP = 40;
var WELCOME_MESSAGE_TIME = 1500;
var RESET_TIME = 1000;
var NUMBER_BASE = 16;
var BACKGROUND_COLOR = new Color(86, 223, 208);
var FONT_COLOR = Color.white;

// Global variables that define the game state.
// Used by several different functions
var titleLabel; 
var binaryButtons = [];
var decimalLabels = [];
var hexResultLabel;
var targetLabel;
var scoreLabel;
var score;

// Start the game by initializing the window and displaying a message
function start() {
    initGame();
    setTimeout(play, WELCOME_MESSAGE_TIME);
}

// Start playing the game by displaying the task and waiting for clicks
function play() {
    displayTitle("Match the target value");
    mouseClickMethod(handleClick);
}

// Handles a click by checking if the user clicked on a bit
// If they did, flip the bit and compute the new result.
// If the result matches the target, award points and reset for a new round
function handleClick(e) {
    var elem = getElementAt(e.getX(), e.getY());
    var buttonIndex = binaryButtons.indexOf(elem);
    
    if(buttonIndex != -1) {
        var button = binaryButtons[buttonIndex];
        toggleButton(button);
        var hexValue = computeBinaryValue();
        
        remove(hexResultLabel);
        hexResultLabel = computeDecimalResultLabel();
        add(hexResultLabel);
        
        if(hexValue == targetLabel.getText()) {
            displayTitle("NICE!");
            score += parseInt(hexValue, NUMBER_BASE);
            displayScoreLabel(score);
            setTimeout(reset, RESET_TIME);
        }
    }
}

// Resets the target and the bits for a new round
function reset() {
    displayTitle("Match the target value");
    for(var i = 0; i < NUM_BITS; i++) {
        binaryButtons[i].setText("0");
    }
    remove(hexResultLabel);
    generateRandomTarget();
}

// Computes the current value according to the bits
function computeBinaryValue() {
    var binaryString = "";
    for(var i = 0; i < NUM_BITS; i++) {
        binaryString += binaryButtons[i].getText();
    }
    
    return parseInt(binaryString, 2).toString(NUMBER_BASE).toUpperCase();
}

// Computes and displays the decimal result label according to the bits that are turned "on"
function computeDecimalResultLabel() {
    var resultString = "";
    var bitCount = 0;
    for(var i = 0; i < NUM_BITS; i++) {
        if(binaryButtons[i].getText() == "1") {
            bitCount++;
            if(resultString.length != 0) {
                resultString += " + ";
            }
            resultString += decimalLabels[i].getText();
        }
    }
    
    resultString += " = " + computeBinaryValue();
    
    var font;
    if(bitCount <= 4) {
        font = "20pt Courier";    
    } else if(bitCount <= 6) {
        font = "15pt Courier";
    } else {
        font = "12pt Courier";
    }
    
    var resultLabel = new Text(resultString, font);
    var x = getWidth() / 2 - resultLabel.getWidth() / 2;
    var y = getHeight() / 3 * 2;
    resultLabel.setPosition(x, y);
    resultLabel.setColor(FONT_COLOR);
    
    return resultLabel;
}

// Flips a given bit label from 0 to 1 or vice versa
function toggleButton(buttonLabel) {
    if(buttonLabel.getText() == "0") {
        buttonLabel.setText("1");
    }
    else {
        buttonLabel.setText("0");
    }
}

// Initializes the initial game state
function initGame() {
    setBackgroundColor(BACKGROUND_COLOR);
    displayTitle("Welcome to the Binary Challenge");
    score = 0;
    displayScoreLabel(score);
    addBinaryButtons();
    addDecimalLabels();
    generateRandomTarget();
    enterTheMatrix();
}

function enterTheMatrix() {
    // TODO: enter the matrix
}

// Sets the background to be the given color
function setBackgroundColor(color) {
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor(color);
    add(background);
}

// Displays the current score to be the given points passed in
function displayScoreLabel(points) {
    remove(scoreLabel);
    
    scoreLabel = new Text("Score: " + points, "13pt Courier");
    var x = getWidth() / 2 - scoreLabel.getWidth() / 2;
    var y = titleLabel.getY() + MESSAGE_TO_POINTS_GAP;
    scoreLabel.setPosition(x, y);
    scoreLabel.setColor(FONT_COLOR);
    
    add(scoreLabel);
}

// Displays a given title message at the top of the game window
function displayTitle(titleString) {
    remove(titleLabel);
    
    titleLabel = new Text(titleString, "15pt Courier");
    var x = getWidth() / 2 - titleLabel.getWidth() / 2;
    var y = TOP_GAP;
    titleLabel.setPosition(x, y);
    titleLabel.setColor(FONT_COLOR);
    
    add(titleLabel);
}

// Adds all the bits to the screen and stores them in the binaryButtons array
function addBinaryButtons() {
    for(var i = 0; i < NUM_BITS; i++) {
        var bitLabel = new Text("0", "30pt Courier");
        var x = BORDER_GAP + (BIT_WIDTH + BIT_SPACING)*i + bitLabel.getWidth() / 2;
        var y = getHeight() / 3;
        bitLabel.setPosition(x, y);
        bitLabel.setColor(FONT_COLOR);
        
        add(bitLabel);
        binaryButtons.push(bitLabel);
    }
}

// Adds all the decimal labels to the screen (8, 4, 2, 1) underneath each bit
function addDecimalLabels() {
    for(var i = 0; i < NUM_BITS; i++) {
        var placeValue = "" + Math.pow(2, NUM_BITS - (i + 1));
        var decimalLabel = new Text(placeValue, "16pt Courier");
        var x = binaryButtons[i].getX();
        if(decimalLabel.getWidth() > BIT_WIDTH) {
            x -= decimalLabel.getWidth() / 4;
        }
        else if (placeValue.length == 1) {
            x += decimalLabel.getWidth() / 2;
        }
        var y = binaryButtons[i].getY() + BIT_TO_DECIMAL_GAP + decimalLabel.getHeight();
        
        decimalLabel.setPosition(x, y);
        decimalLabel.setColor(FONT_COLOR);
        
        decimalLabels.push(decimalLabel);
        
        add(decimalLabel);
    }
}

// Generates a random target value and displays it at the bottom of the screen
function generateRandomTarget() {
    var max = Math.pow(2, NUM_BITS) - 1;
    var val = Randomizer.nextInt(0, max);
    val = val.toString(NUMBER_BASE).toUpperCase();
    
    remove(targetLabel);
    
    targetLabel = new Text(val, "40pt Courier");
    var x = getWidth() / 2 - targetLabel.getWidth() / 2;
    var y = getHeight() - BOTTOM_GAP;
    
    targetLabel.setPosition(x, y);
    targetLabel.setColor(FONT_COLOR);
    
    add(targetLabel);
}
