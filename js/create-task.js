
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
  showCareerButton();
  showCareerText();

  //should just show career text and career buttons
}

function showCareerText() {
  document.getElementById("careerText").style.visibility="visible";
}

function showCareerButton() {
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("careerButton")[i].style.visibility="visible";
  }
}

function itButton() {
  show("compSciResultOne", "compSciResultTwo")
  
  //should go to an it result
}

function govButton() {
  show("govResultOne", "govResultTwo")
  
  //should go to a gov result
}

function businessButton() {
  show("businessResultOne", "businessResultTwo", "businessResultThree")
  
  //should go to a business result
}

function artsButton() {
  show("artResultOne", "artResultTwo")
  
  //should go to an arts result
}

function medButton() {
  show("medResultOne", "medResultTwo")
  
  //should go to a med result
}

function undecidedButton() {
  show("undecidedResultOne", "undecidedResultTwo")
  
  //should go to an undecided result
}
