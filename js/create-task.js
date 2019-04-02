
function show(){
  document.getElementById("startOverButton").style.visibility="visible";
  document.getElementById("switchButton").style.visibility="visible";
  document.getElementById("continueButton").style.visibility="visible";
  document.getElementsByClassName("careerButton")[0,1,2,3,4,5].style.visibility="visible";
  document.getElementById("careerText").style.visibility="visible";
  document.getElementsByClassName("results")[0,1,2,3,4,5,6,7,8,9,10,11,12,13].style.visibility="visible";
  document.getElementById("startOverButton").style.visibility="hidden";
}

function start() {
  showStarOverButton();
  showCareerButton();
  document.getElementById("startOverButton").style.visibility="visible";

  //show everything except results and the continue button
}

function showStarOverButton() {
  document.getElementById("startOverButton").style.visibility="visible";
}

function showCareerButton() {
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("careerButton")[i].style.visibility="visible";
  }
}

function startOverButton() {
  show("startButton")
  //it should be like clicking start again
}

function switchButton() {
  show("careerButton", "startoverButton", "switchButton")
  //it should just reappear the career button but not reset the data collected from the user
}

function continueButton() {
  // show()
  //should allow to continue after first time clicking a career button
}

function itButton() {
  show("compSciResultOne")
  //should go to an it result
}

function govButton() {
  show("govResultOne")
  //should go to a gov result
}

function businessButton() {
  show("")
  //should go to a business result
}

function artsButton() {
  show()
  //should go to an arts result
}

function medButton() {
  show()
  //should go to a med result
}

function undecidedButton() {
  show()
  //should go to an undecided result
}
