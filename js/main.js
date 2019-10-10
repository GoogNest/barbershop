var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = "";
var isStorageSupport = true;

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("клик по входу");
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  login.focus();
  if (storage) {
    login.value = storage;
    pass.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("закрытие модалки");
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
  if (!login.value || !pass.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("пустая форма");
  }
  else{
    evt.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
    console.log("отправка формы");
    console.log(login.value);
    console.log(pass.value);
    console.log(popup);
    
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");
var linkMap = document.querySelector(".map-link");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("клик по кнопке карта");
  modalMap.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("закрытие карты");
  modalMap.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});