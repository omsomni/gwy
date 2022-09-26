function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

var counter = 1;
var pageCounter = 1;

// pages
// separate paragraphs with comma
const pages = {
  1: ["Happy Birthday Luna!"],
  2: [
    "Helloo,",
    " ",
    "Hindi ko alam kung kelan mo to makikita pero medyo late na HAHAHAHAHA",
    "Once again, belated happy birthday! Sana nagenjoy ka and more birthdays to come >:)",
    "Wala naman ako masyadong masasabi na right now kasi halos naman siguro nasabi ko na sa letter.",
    "Medyo maganda sulat ko so sana hindi ka naiyak HAHAHAHA",
  ],
  3: [
    "Gusto ko lang ikwento yung hindi ko nakwento before. Yung after ng malofest ata?",
    "Hindi ko na kinuwento nung kinabukasan pero hindi ko na tinuloy. Pero ayun, hindi ko talaga gusto si kaila at never naging si kaila.",
    "Kaya sinabi ko dati na nalowbatt nako, kasi ayaw ko muna sabihin. Pero since medyo maluwag-luwag na ngayon, kaya sinabi ko na.",
    "Gusto ko lang sabihin para malabas ko na rin since ayun nga",
  ], 
  4: [
    "Helloo, idk if makikita mo to pero, I missed our chats hehe",
    "And syempre namiss ko rin mga isesend mo na sagot esp sa physics diba? <333",
    "Sana magpatuloy pa kasi I really want to know you more as a friend, feel ko ang saya & caring mo na friend 🥴"
  ], 
  5: [
    "WIP",
    " ",
    "Magdadagdag ako as time goes on.",
    "Marami pa akong ilalagay here and mga additional something.",
    " ",
    "Gagawin ko to as parang diary kasi why not. Lalagay ko rin dito mga thoughts ko abt sayo mwehehe",
    ]
};

// a cycle of gwen's pics
// voice mmesage ??

const maxPage = Object.keys(pages).length;

var everything = document.getElementById("everything");
var everythingText = document.createElement("p");

var rightArrow = document.createElement("h3");
rightArrow.setAttribute("id", "rightArrow");
rightArrow.innerText = "⤻";

var leftArrow = document.createElement("h3");
leftArrow.setAttribute("id", "leftArrow");

document
  .getElementById("btnSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const nick = document.getElementById("nick").value;
    var wrapper = document.getElementById("errorDiv");

    if (nick.toLowerCase() === "luna") {
      toggle("form", "show", "hide");

      if (wrapper !== null) {
        document.body.removeChild(wrapper);
      }

      document.body.removeChild(formDiv);

      initConfetti();

      if (everything === null) {
        everything = document.createElement("div");
        everything.setAttribute("id", "everything");

        everythingText.setAttribute("id", "everythingText");

        // first page
        everythingText.innerHTML = pages[1];
        everythingText.setAttribute("id", "page" + pageCounter);

        createRight();

        everything.appendChild(everythingText);

        document.body.appendChild(leftArrow);
        document.body.appendChild(rightArrow);
        document.body.appendChild(everything);
      }
    } else {
      var error = document.getElementById("error");
      var check = "";

      if (error === null) {
        error = document.createElement("h2");

        error.setAttribute("id", "error");
        check = "ikaw ba talaga si gwy 😠 ULITIN MO!!";
      } else {
        check = "ikaw ba talaga si gwy 😠 ULITIN MO!! (" + counter++ + ")";
      }

      if (nick === "") {
        check = "tangina ambobo mo sagutan mo muna";
      }

      error.innerHTML = check;

      if (wrapper === null) {
        wrapper = document.createElement("div");

        wrapper.setAttribute("id", "errorDiv");
        wrapper.appendChild(error);

        document.body.appendChild(wrapper);
      }
    }
  });

function createLeft() {
  leftArrow.addEventListener("click", (event) => {
    pageCounter--;

    if (pageCounter > 1) {
      leftArrow.innerText = "⤺";
      console.log("minus: " + pageCounter);

      everythingText.innerHTML = pages[pageCounter];

      console.log(everythingText);
    }

    if (pageCounter <= 1) {
      leftArrow.innerText = "";
    }
  });

  // leftArrow.innerText = "⤺";
}

function createRight() {
  rightArrow.addEventListener("click", (event) => {
    pageCounter++;

    everythingText.setAttribute("id", "page" + pageCounter);
    createLeft();

    if (pageCounter >= maxPage) {
      rightArrow.innerHTML = ""; // max
    }

    // add transition of flipping book
    var content = "";

    pages[pageCounter].forEach((paragraph) => {
      content = content.concat("&ensp;" + paragraph + "<br>");
    });

    everythingText.innerHTML = content;
  });
}

function initConfetti() {
  var confettiSettings = { target: "confetti", max: 100 };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function toggle(element, remClass, addClass) {
  if (remClass !== "") {
    document.getElementById(element).classList.remove(remClass);
  }

  if (addClass !== "") {
    document.getElementById(element).classList.add(addClass);
  }
}
