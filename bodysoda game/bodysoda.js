"use strict";
//DOM declarations
let image = document.getElementById("guess-id");
const won = document.querySelector(".won");
const answerBox = document.querySelector(".ans");
const submitBox = document.getElementById("submit-box");

//document.querySelector(".hint").hidden = true;
document.querySelector(".skip").hidden = true;

const life1 = document.getElementById("B1");
const life2 = document.getElementById("O1");
const life3 = document.getElementById("D1");
const life4 = document.getElementById("Y1");
const life5 = document.getElementById("S1");
const life6 = document.getElementById("O2");
const life7 = document.getElementById("D2");
const life8 = document.getElementById("A1");

const keypad = [
  document.getElementById("A"),
  document.getElementById("B"),
  document.getElementById("C"),
  document.getElementById("D"),
  document.getElementById("E"),
  document.getElementById("F"),
  document.getElementById("G"),
  document.getElementById("H"),
  document.getElementById("I"),
  document.getElementById("J"),
  document.getElementById("K"),
  document.getElementById("L"),
  document.getElementById("M"),
  document.getElementById("N"),
  document.getElementById("O"),
  document.getElementById("P"),
  document.getElementById("Q"),
  document.getElementById("R"),
  document.getElementById("S"),
  document.getElementById("T"),
  document.getElementById("U"),
  document.getElementById("V"),
  document.getElementById("W"),
  document.getElementById("X"),
  document.getElementById("Y"),
  document.getElementById("Z"),
  document.getElementById("-"),
];

const life = [life1, life2, life3, life4, life5, life6, life7, life8];
let lifeCount = 0;
let ansCount = 0;
let score = 0;
let highScore = 0;
let hint = "hi";

const scoreBox = function () {
  document.querySelector(".score").textContent = `Score : ${score}`;
  document.querySelector(".hscore").textContent = `High-Score : ${highScore}`;
};

let totalAnsBox = 20;
let answerLength = 0;
let remAnsBox = 0;
won.hidden = "True";

// Listing vadivelu names
const vadiveluNames = [
  "naaisekar",
  "nesamani",
  "ekaambaram",
  "kaipulla",
  "pichumani",
  "pulikesi",
  "BODYSODA",
  "ELI",
  "KALIYAPERUMAL",
  "SNAKE-BABU",
  "SOONA-PAANA",
  "SORIMUTHU",
  "STEVE-WAUGH",
  "STYLE-PANDI",
  "SUDALAI",
  "SUMO",
  "TELEX-PANDIAN",
  "THEEPORI-THIRUMUGAM",
  "VAKKIL-VANDUMURUGAN",
  "VEERABAGU",
  "VELLAISAMY",
];
var str = "";

let spin = 0;
const espin = function () {
  spin = Math.trunc(Math.random() * 21) + 1;
  console.log(spin);
};
//spin = Math.trunc(Math.random() * 6) + 1;
//Calculate the length of the word
// display the answer_box as per the length of the word
const operation = function () {
  answerLength = vadiveluNames[spin - 1].length;

  for (let i = totalAnsBox; i > answerLength; i--) {
    document.getElementById(i).hidden = true;
  }
};

let X = 0;
const resetLife = function () {
  for (let i = 0; i < life.length; i++) {
    X = i;
    switch (X) {
      case 0:
        life[X].value = "B";
        life[X].style.color = "green";
        break;

      case 1:
        life[X].value = "O";
        life[X].style.color = "green";
        break;

      case 2:
        life[X].value = "D";
        life[X].style.color = "green";
        break;

      case 3:
        life[X].value = "Y";
        life[X].style.color = "green";
        break;
      case 4:
        life[X].value = "S";
        life[X].style.color = "green";
        break;
      case 5:
        life[X].value = "O";
        life[X].style.color = "green";
        break;

      case 6:
        life[X].value = "D";
        life[X].style.color = "green";
        break;
      case 7:
        life[X].value = "A";
        life[X].style.color = "green";
        break;
      default:
        console.log("invalid");

        break;
    }
  }
};

const begin = function () {
  espin();
  resetLife();
  submitBox.disabled = true;
  image.src = "/images/guess.jpg";

  switch (spin) {
    case 21:
      operation();
      str = "VELLAISAMY";
      hint = "Kuruvammaaa... Chellathaayee";
      break;

    case 20:
      operation();
      str = "VEERABAGU";
      hint = "a proud bakery owner";
      break;

    case 19:
      operation();
      str = "VAKKIL-VANDUMURUGAN";
      hint = "kadupethuraar my lord!!!";
      break;

    case 18:
      operation();
      str = "THEEPORI-THIRUMUGAM";
      hint = "thaaley la la.. laaa laaaa..";
      break;

    case 17:
      operation();
      str = "TELEX-PANDIAN";
      hint = "enna simbran idhu";
      break;

    case 16:
      operation();
      str = "SUMO";
      hint = "famous SUV";
      break;

    case 15:
      operation();
      str = "SUDALAI";
      hint = "foreign return";
      break;

    case 14:
      operation();
      str = "STYLE-PANDI";
      hint = "area ku vaada nee";
      break;

    case 13:
      operation();
      str = "STEVE-WAUGH";
      hint = "sing in the rain";
      break;

    case 12:
      operation();
      str = "SORIMUTHU";
      hint = "ghost rider";
      break;

    case 11:
      operation();
      str = "SOONA-PAANA";
      hint = "nee dhan thairiyamana aal aachey";
      break;

    case 10:
      operation();
      str = "SNAKE-BABU";
      hint = "its mee....";
      break;

    case 9:
      operation();
      str = "KALIYAPERUMAL";
      hint = "chettiyar poitaaru daaw";
      break;

    case 8:
      operation();
      str = "ELI";
      hint = "detective";
      break;

    case 7:
      operation();
      str = "BODYSODA";
      hint = "va sruthi polam";
      break;

    case 6:
      operation();
      str = "PULIKESI";
      hint = "kakaga po";
      break;

    case 5:
      operation();
      str = "PICHUMANI";
      hint = "adichaan paaru appointment order eh";
      break;

    case 4:
      operation();
      str = "KAIPULLA";
      hint = "innuma da indha ooru nambala nambudhu";
      break;

    case 3:
      operation();
      str = "ENCOUNTER-EGAMBARAM";
      hint = "nalla irukiya mala";
      break;

    case 2:
      operation();
      str = "NESAMANI";
      hint = "aaniyey pudunga vennaam";
      break;

    case 1:
      operation();
      str = "NAAISEKAR";
      hint = "vesham vesham vesham";
      break;

    default:
      console.log(`${spin} end`);
      break;
  }
  console.log(str);
  //spin = Math.trunc(Math.random() * 6) + 1;
  won.hidden = true;
  for (let i = 0; i < 27; i++) {
    keypad[i].disabled = false;
  }
  //score = 0;
  lifeCount = 0;
  scoreBox();
};

//changing images according to the spined value
const imgset = function () {
  switch (spin) {
    case 21:
      image.src = "/images/vellaisamy.jpg";
      break;

    case 20:
      image.src = "/images/veerabagu.jpg";

      break;

    case 19:
      image.src = "/images/vakkil vandumurugan.jpg";

      break;

    case 18:
      image.src = "/images/theepori thirumugam.jpg";

      break;

    case 17:
      image.src = "/images/telex pandian.jpg";

      break;

    case 16:
      image.src = "/images/sumo.jpg";

      break;

    case 15:
      image.src = "/images/sudalai.jpg";

      break;

    case 14:
      image.src = "/images/style pandi.jpg";

      break;

    case 13:
      image.src = "/images/steve waugh.jpg";

      break;

    case 12:
      image.src = "/images/sorimuthu.jpg";

      break;

    case 11:
      image.src = "/images/soona paana.jpg";

      break;

    case 10:
      image.src = "/images/snake babu.jpg";

      break;

    case 9:
      image.src = "/images/kaliyaperumal.jpg";

      break;

    case 8:
      image.src = "/images/eli.jpg";

      break;

    case 7:
      image.src = "/images/bodysoda.jpg";

      break;

    case 6:
      image.src = "/images/pulikesi.jpg";

      break;

    case 5:
      image.src = "/images/pichumani.jpg";

      break;

    case 4:
      image.src = "/images/kaipulla.jpg";

      break;

    case 3:
      image.src = "/images/encounter egambaram.jpg";

      break;
    case 2:
      image.src = "/images/nesamani.jpg";

      break;
    case 1:
      image.src = "/images/naaisekar.jpg";

      break;

    default:
      document.getElementById("guess-id").src = "/images/guess.jpg";

      break;
  }
};

const final = function () {
  imgset();

  won.hidden = false;
  for (let i = 0; i < 27; i++) {
    keypad[i].disabled = true;
  }
  scoreBox();
  // document.querySelector(".score").textContent = `Score : ${score}`;
  // document.querySelector(".hscore").textContent = `High-Score : ${highScore}`;
};
//operation();
begin();

const keypressed = function (clicked_id) {
  // assigning a variable to store the pressed key value

  var key = document.getElementById(clicked_id).value;
  document.getElementById(clicked_id).disabled = true;

  //Checking whether the key is present in the available string
  var n = str.includes(key, 0);
  //console.log(str);

  if (n) {
    //Also checking no. times its present and place the matching string in the respective answer-box
    for (let i = 1; i <= str.length; i++) {
      var res = str.charAt(str.length - i);

      if (res === key) {
        let position = str.length - i;
        position++;
        document.getElementById(position).value = key;
        ansCount++;

        //Condition to check if the player has won
        if (ansCount === str.length) {
          won.textContent = "Hurray you have won 🎉🎉🎉";
          score++;
          if (score > highScore) {
            highScore = score;
          }
          submitBox.disabled = false;
          // won.hidden = false;
          // for (let i = 0; i < 26; i++) {
          //   keypad[i].disabled = true;
          // }
          final();
        }
      } else {
        console.log("no data found");
      }
    }
  } else {
    console.log(" Wrong Guess");
    console.log(lifeCount);
    //Condition to check if the player has lost
    if (lifeCount !== life.length - 1) {
      life[lifeCount].value = "X";
      life[lifeCount].style.color = "red";
      lifeCount++;
    } else {
      life[lifeCount].value = "X";
      life[lifeCount].style.color = "red";
      won.textContent = " 💔💔💔 Game Over!!! 💔💔💔";
      // won.hidden = false;
      // for (let i = 0; i < 26; i++) {
      //   keypad[i].disabled = true;
      // }
      final();
    }
  }
};

//next button
const next = function () {
  console.log("next");
  lifeCount = 0;
  ansCount = 0;
  //score = 0;
  for (let i = 1; i <= 20; i++) {
    document.getElementById(i).hidden = false;
    document.getElementById(i).value = " ";
  }
  //resetLife();
  begin();
};

//Reset button
const reset = function () {
  console.log("reset");
  lifeCount = 0;
  ansCount = 0;
  score = 0;

  for (let i = 1; i <= 20; i++) {
    document.getElementById(i).hidden = false;
    document.getElementById(i).value = " ";
  }
  begin();
};

//Hint

const hint1 = function () {
  //imgset();
  document.querySelector(".hint").textContent = hint;
  //alert(hint);
};
