
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
