/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===============  MENU SHOW ===============*/
// Validate if constant exist

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===============  MENU HIDDEN ===============*/
// Validate if constant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav_link");

const linkAnction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAnction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_data, .footer_container, .footer_group`);
sr.reveal(`.home_img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos_img .program_card .pricing_card`, { interval: 100 });
sr.reveal(`.choose_img .calculate_content`, { origin: "left" });
sr.reveal(`.choose_content .calculate_img`, { origin: "right" });

/*=============== CALCULATE ===============*/

const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMsg = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();
  if (calculateCm.value === "" || calculateKg.value === "") {
    calculateMsg.classList.remove("color-green");
    calculateMsg.classList.add("color-red");

    calculateMsg.textContent = "Fill in the Height and Weight 😒";
    setTimeout(() => {
      calculateMsg.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMsg.classList.add("color-green");
      calculateMsg.textContent = `Your Bmi is ${bmi} and you are skinny 😐`;
    } else if (bmi < 25) {
      calculateMsg.classList.add("color-green");
      calculateMsg.textContent = `Your Bmi is ${bmi} and you are healthy 😎`;
    } else {
      calculateMsg.classList.add("color-green");
      calculateMsg.textContent = `Your Bmi is ${bmi} and you are overweight 😐`;
    }

    calculateKg.value = "";
    calculateCm.value = "";

    setTimeout(() => {
      calculateMsg.textContent = "";
    }, 5000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/*=============== EMAIL US ===============*/

const contactForm = document.getElementById("contact-form");
const contactMsg = document.getElementById("contact-message");
const contactUser = document.getElementById("contact-user");

const sendMail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMsg.classList.remove("color-green");
    contactMsg.classList.add("color-red");

    contactMsg.textContent = "You must enter an email 👆";

    setTimeout(() => {
      contactMsg.textContent = "";
    }, 4000);
  } else {
    emailjs.sendForm().then(
      () => {
        contactMsg.classList.add("color-green");
        contactMsg.textContent = "You registered successfully 💪.";

        setTimeout(() => {
          contactMsg.textContent = "";
        }, 4000);
      },
      (error) => {
        alert("OOPS! SOMETHING HAS FAILED.......", error);
      }
    );

    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendMail);
