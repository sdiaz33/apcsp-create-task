
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
