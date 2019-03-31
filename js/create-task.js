
function show(){
  document.getElementById("startOverButton").style.visibility="visible";
  document.getElementById("switchButton").style.visibility="visible";
  document.getElementById("continueButton").style.visibility="visible";
  document.getElementById("careerButton").style.visibility="visible";
  document.getElementById("careerText").style.visibility="visible";
  document.getElementById("results").style.visibility="visible";
}

function start(){
  show();
  //show everything except results and the continue button
}

function startOverButton {
  show()
  //it should be like clicking start again
}

function switchButton {
  show()
  //it should just reappear the career button but not reset the data collected from the user
}

function continueButton {
  show()
  //should allow to continue after first time clicking a career button
}

function itButton {
  show()
  //should go to an it result
}

function govButton {
  show()
  //should go to a gov result
}

function businessButton {
  show()
  //should go to a business result
}

function artsButton {
  show()
  //should go to an arts result
}

function medButton {
  show()
  //should go to a med result
}

function undecidedButton {
  show()
  //should go to an undecided result
}
