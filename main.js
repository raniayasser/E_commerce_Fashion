// loading page
const spinnerWrapper = document.querySelector(".loader");
setTimeout(() => {
  spinnerWrapper.style.width = "0%";
}, 1500);
const spinnerWrapperr = document.querySelector(".loaderr");
setTimeout(() => {
  spinnerWrapperr.style.width = "0%";
}, 1000);

// open &&close navbar
function openNav() {
  document.querySelector(".open-close-nav").style.width = "100%";
  document.querySelector(".contantuser").style.width = "300px";
}
function closeNav() {
  document.querySelector(".open-close-nav").style.width = "0px";
  document.querySelector("..contantuser").style.width = "0px";
}

// dark mood
var theme_toggler = document.querySelector("#theme-toggler");
function darkMood() {
  var dark = document.querySelector("body");
  dark.classList.toggle("dark-mood");
  theme_toggler.classList.toggle("fa-sun");
}

// product slides

const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    630: {
      slidesPerView: 2,
    },

    990: {
      slidesPerView: 3,
    },
  },
});

// featured section
document.querySelectorAll(".small-image-1").forEach((images) => {
  images.onclick = function () {
    document.querySelector(".big-image-1").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-2").forEach((images) => {
  images.onclick = function () {
    document.querySelector(".big-image-2").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-3").forEach((images) => {
  images.onclick = function () {
    document.querySelector(".big-image-3").src = images.getAttribute("src");
  };
});

//   counter data

let countData = new Date("feb 1, 2021 00:00:00").getTime();

function countDown() {
  var now = new Date().getTime();
  sub = countData - now;

  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;

  var d = Math.floor(sub / days);
  var h = Math.floor((sub % days) / hours);
  var m = Math.floor((sub % hours) / minutes);
  var s = Math.floor((sub % minutes) / seconds);

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("seconds").innerHTML = s;
  document.getElementById("minutes").innerHTML = m;
}
setInterval(function () {
  countDown();
}, 1000);

// send email

function SendEmail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("emailAddress").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_na8g47h", "template_3nbepuf", params);
}

// add to cart

// open and close aside
let asideBar = document.querySelector("aside");
let cart_count = document.querySelector(".cart-count");
let closebtn2 = document.querySelector(".closebtn2");

cart_count.addEventListener("click", (e) => {
  e.preventDefault();
  asideBar.classList.toggle("open");
});
closebtn2.addEventListener("click", (e) => {
  e.preventDefault();
  asideBar.classList.toggle("open");
});

// array of items
const items = [
  {
    id: 0,
    title: "col cloths",
    price: 15,
    img: "images/cman1.jpg",
    amount: 1,
  },
  {
    id: 1,
    title: "violate cloth",
    price: 25,
    img: "images/cman2.png",
    amount: 1,
  },
  {
    id: 2,
    title: "dark cloth",
    price: 10,
    img: "images/cman3.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "classic cloth",
    price: 30,
    img: "images/cman4.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "dark_green shirt",
    price: 100,
    img: "images/cman5.jpg",
    amount: 1,
  },
  {
    id: 5,
    title: "Croot shirt",
    price: 55,
    img: "images/cman6.png",
    amount: 1,
  },
  {
    id: 11,
    title: "Col cloths",
    price: 15,
    img: "images/cweman1.jpg",
    amount: 1,
  },
  {
    id: 6,
    title: "Classic cloth",
    price: 25,
    img: "images/cwemen2.png",
    amount: 1,
  },
  {
    id: 7,
    title: "brigth cloth",
    price: 10,
    img: "images/cweman3.jpg",
    amount: 1,
  },
  {
    id: 8,
    title: "croot shirt",
    price: 30,
    img: "images/cweman4.jpg",
    amount: 1,
  },
  {
    id: 9,
    title: "col jaket",
    price: 100,
    img: "images/cweman5.jpg",
    amount: 1,
  },
  {
    id: 10,
    title: "Dark green shirt",
    price: 55,
    img: "images/cweman6.jpg",
    amount: 1,
  },
];

// render items
let parentBox = document.querySelector(".perant-card");
let shopItems = "";
function renderItems() {
  items.forEach((item) => {
    shopItems += `   
        <div class="col-lg-4 col-md-6 col-sm-6">     
        <div class="smallcard">
        <img src="${item.img}" >
        <h5>${item.title}</h5>
        <p>
          $15.00 <del>$${item.price}.00</del>
          <a href="#" class="fas fa-shopping-cart carticon"data-id="${item.id}"></a>

        </p>
      </div>
      </div>
                    
        `;
    parentBox.innerHTML = shopItems;
  });
}
renderItems()

// render cart items
let cartItems = [];
let cartItemsBody = "";

function renderCartItems() {
  cartItemsBody = "";
  cartItems.forEach((item) => {
    cartItemsBody += `
        <tr>
                <td>${item.id}</td>
                <td> <img src="${item.img}" alt="" srcset=""> </td>
                <td>${item.title}</td>
                <td>
                    <span type="button" class="btn btn-link btn-sm px-3" onclick="updateCartItem('increase',${
                      item.id
                    })"> + </span>
                    <span class="amount"> ${item.amount} </span>
                    <span type="button" class="btn btn-link btn-sm px-3" onclick="updateCartItem('decrease',${
                      item.id
                    })"> - </span>
                </td>
                <td>${item.price}.00$</td>
                <td>${item.price * item.amount}.00$</td>
                <td>
                <button type="button" onclick="deleteCartItem(${
                  item.id
                })"  class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                <i class="fas fa-times"></i>
              </button></td>
    </tr>

        `;
    document.querySelector("tbody").innerHTML = cartItemsBody;
  });
  // change span number
  document.querySelector(".cart-count span").innerHTML = cartItems.length;
}
renderCartItems();

// array
// add
let addCartButtons = document.querySelectorAll(".carticon");

addCartButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = btn.dataset.id;
    items.find((item) => {
      if (item.id == id) {
        if (cartItems.some((cartItem) => cartItem.id == id)) {
          alert("product already added");
        } else {
          cartItems.push(item);
          renderCartItems();
        }
      }
    });
  });
});
//
function updateCartItem(action, id) {
  cartItems.find((item) => {
    if (item.id == id) {
      if (action == "increase") {
        item.amount += 1;
      } else {
        if (item.amount > 1) {
          item.amount -= 1;
        }
      }

      renderCartItems();
    }
  });
}

// delete
function deleteCartItem(id) {
  cartItems = cartItems.filter((item) => item.id != id);
  renderCartItems();
  if (cartItems.length == 0) {
    document.querySelector("tbody").innerHTML = "";
  }
}

function deleteAll() {
  cartItems = [];
  document.querySelector("tbody").innerHTML = "";
  // change span number
  document.querySelector(".cart-count span").innerHTML = cartItems.length;
}

// search auto complete && fliter list on products

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  var itemsearch = document.querySelectorAll(".smallcard");
  // loop for display li
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    a.style.display = "block";

    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  for (var i = 0; i <= itemsearch.length; i++) {
    let h = itemsearch[i].getElementsByTagName("h5")[0];
    value = h.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      itemsearch[i].style.display = "";
    } else {
      itemsearch[i].style.display = "none";
    }
  }
}

function searchhead() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchhead");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  var itemsearch = document.querySelectorAll(".smallcard");
  // loop for display li
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    a.style.display = "block";

    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  for (var i = 0; i <= itemsearch.length; i++) {
    let h = itemsearch[i].getElementsByTagName("h5")[0];
    value = h.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      itemsearch[i].style.display = "";
    } else {
      itemsearch[i].style.display = "none";
    }
  }
}
