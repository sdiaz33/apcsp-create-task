
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
  // document.getElementById("startButton").style.visibility="hidden";
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

function compSciButton() {
  showCompSciResults()

  //should go show all com sci results
}

function showCompSciResults() {
  if (document.getElementById("compSciResultOne").style.visibility == "visible" &&
      document.getElementById("compSciResultTwo").style.visibility == "visible") {

      document.getElementById("compSciResultOne").style.visibility="hidden";
      document.getElementById("compSciResultTwo").style.visibility="hidden";
  } else if (document.getElementById("compSciResultOne").style.visibility == "visible") {
    document.getElementById("compSciResultTwo").style.visibility="visible";
  } else if (document.getElementById("compSciResultOne").style.visibility != "visible") {
    document.getElementById("compSciResultOne").style.visibility="visible";
  }
}

function govButton() {
  showGovResults()

  //should show all gov results
}

function showGovResults() {
  if (document.getElementById("govResultOne").style.visibility == "visible" &&
      document.getElementById("govResultTwo").style.visibility == "visible") {

      document.getElementById("govResultOne").style.visibility="hidden";
      document.getElementById("govResultTwo").style.visibility="hidden";
  } else if (document.getElementById("govResultOne").style.visibility == "visible") {
    document.getElementById("govResultTwo").style.visibility="visible";
  } else if (document.getElementById("govResultOne").style.visibility != "visible") {
    document.getElementById("govResultOne").style.visibility="visible";
  }
}

function businessButton() {
  showBusinessResults()

  //should show all business results
}

function showBusinessResults() {

  if (document.getElementById("businessResultOne").style.visibility == "visible" &&
      document.getElementById("businessResultTwo").style.visibility == "visible" &&
      document.getElementById("businessResultThree").style.visibility =="visible") {

      document.getElementById("businessResultOne").style.visibility == "hidden";
      document.getElementById("businessResultTwo").style.visibility == "hidden";
      document.getElementById("businessResultThree").style.visibility =="hidden";
  } else if (document.getElementById("businessResultOne").style.visibility == "visible") {
  document.getElementById("businessResultTwo").style.visibility="visible";
} else if (document.getElementById("businessResultOne").style.visibility != "visible") {
  document.getElementById("businessResultOne").style.visibility="visible";
}else if (document.getElementById("businessResultTwo").style.visibility == "visible") {
  document.getElementById("businessResultThree").style.visibility="visible";
}
}

function artsButton() {
  showArtsResults()

  //should show all gov results
}

function showArtsResults() {
  if (document.getElementById("artsResultOne").style.visibility == "visible" &&
      document.getElementById("artsResultTwo").style.visibility == "visible") {

      document.getElementById("artsResultOne").style.visibility="hidden";
      document.getElementById("artsResultTwo").style.visibility="hidden";
  } else if (document.getElementById("artsResultOne").style.visibility == "visible") {
    document.getElementById("artsResultTwo").style.visibility="visible";
  } else if (document.getElementById("artsResultOne").style.visibility != "visible") {
    document.getElementById("artsResultOne").style.visibility="visible";
  }
}

function medButton() {
  showMedResults()

  //should show all med results
}

function showMedResults() {
  if (document.getElementById("medResultOne").style.visibility == "visible" &&
      document.getElementById("medResultTwo").style.visibility == "visible") {

      document.getElementById("medResultOne").style.visibility="hidden";
      document.getElementById("medResultTwo").style.visibility="hidden";
  } else if (document.getElementById("medResultOne").style.visibility == "visible") {
    document.getElementById("medResultTwo").style.visibility="visible";
  } else if (document.getElementById("medResultOne").style.visibility != "visible") {
    document.getElementById("medResultOne").style.visibility="visible";
  }
}

function undecidedButton() {
  showUndecidedResults()

  //should show all undecided results
}

function showUndecidedResults() {
  if (document.getElementById("undecidedResultOne").style.visibility == "visible" &&
      document.getElementById("undecidedResultTwo").style.visibility == "visible") {

      document.getElementById("undecidedResultOne").style.visibility="hidden";
      document.getElementById("undecidedResultTwo").style.visibility="hidden";
  } else if (document.getElementById("undecidedResultOne").style.visibility == "visible") {
    document.getElementById("undecidedResultTwo").style.visibility="visible";
  } else if (document.getElementById("undecidedResultOne").style.visibility != "visible") {
    document.getElementById("undecidedResultOne").style.visibility="visible";
  }
}
