// Professional
const skillsSection = document.getElementById("content-Professional");
const progressBars = document.querySelectorAll(".progress-bar");
// Work Experience
// const experienceCard = document.getElementById("experience-card");
const experienceLines = document.querySelectorAll(".experience-list");
const screenPos = window.innerHeight;
// References
const referencesContent = document.querySelectorAll(".references-content");
const referencesHeader = document.querySelectorAll(".references-header");

// Contact
const contactAddress = document.querySelectorAll(".contactAddress");

// Professional
function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;

    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBars.forEach((progressBar) => {
    progressBar.style.opacity = 0;
    progressBar.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
// Work Experience
window.addEventListener("scroll", () => {
  experienceLines.forEach((element) => {
    const scrollTop = window.scrollY;
    const offsetTop = element.offsetTop;
    const distance = offsetTop - scrollTop;
    const windowheight = window.innerHeight;
    const breakpoint = windowheight;
    if (distance < breakpoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
// References

window.addEventListener("scroll", () => {
  referencesHeader.forEach((element) => {
    const scrollTop = window.scrollY;
    const offsetTop = element.offsetTop;
    const distance = offsetTop - scrollTop;
    const windowheight = window.innerHeight;
    const breakpoint = windowheight;
    if (distance < breakpoint) {
      element.classList.add("active-references");
    } else {
      element.classList.remove("active-references");
    }
  });
});
window.addEventListener("scroll", () => {
  referencesContent.forEach((element) => {
    const scrollTop = window.scrollY;
    const offsetTop = element.offsetTop;
    const distance = offsetTop - scrollTop;
    const windowheight = window.innerHeight;
    const breakpoint = windowheight;
    if (distance < breakpoint) {
      element.classList.add("active-references");
    } else {
      element.classList.remove("active-references");
    }
  });
});

// locksubmit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// form-commet
function Validator(formSelector) {
  function getParent(element, selector) {
    while (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
  var formRules = {};

  var validatorRules = {
    required: function (value) {
      return value ? undefined : "入力情報は必要です";
    },

    email: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      return regex.test(value) ? undefined : "メールアドレスを入力下さい";
    },
    message: function (value) {
      return value ? undefined : "情報を入力下さい";
    },
  };
  var formElement = document.querySelector(formSelector);

  if (formElement) {
    var inputs = formElement.querySelectorAll("[name][rules]");

    for (var input of inputs) {
      var rules = input.getAttribute("rules").split("|");
      for (var rule of rules) {
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(validatorRules[rule]);
        } else {
          formRules[input.name] = [validatorRules[rule]];
        }
      }

      //  event
      input.onblur = handleValidate;
      input.oninput = handleClear;
    }
    function handleValidate(e) {
      var rules = formRules[e.target.name];

      var errorMsg;
      rules.some(function (rule) {
        errorMsg = rule(e.target.value);
        return errorMsg;
      });
      if (errorMsg) {
        var formGroup = getParent(e.target, ".form__group")
        if(formGroup){
          formGroup.classList.add("invalid")
          var formMessage = formGroup.querySelector(".form__msg");
          if(formMessage){
            formMessage.innerText = errorMsg;
          }
        }
      }
    }
    function handleClear(e){
      var formGroup = getParent(e.target, ".form__group")
      if(formGroup.classList.contains("invalid")){
        formGroup.classList.remove("invalid")
        var formMessage = formGroup.querySelector(".form__msg");
        if(formMessage){
          formMessage.innerText="";
        }
      }

    }
  }

 
}

// contact
window.addEventListener("scroll", () => {
  contactAddress.forEach((element) => {
    const scrollTop = window.scrollY;
    const offsetTop = element.offsetTop;
    const distance = offsetTop - scrollTop;
    const windowheight = window.innerHeight;
    const breakpoint = windowheight;
    if (distance < breakpoint) {
      element.classList.add("activeAddress");
    } else {
      element.classList.remove("activeAddress");
    }
  });
});