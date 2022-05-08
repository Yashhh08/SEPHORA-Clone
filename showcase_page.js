/* SHOWCASE DATA */

var showcase_Data = JSON.parse(localStorage.getItem("showcase_data")) || [];
var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
var favourite_Data = JSON.parse(localStorage.getItem("favourite")) || [];

console.log(showcase_Data);
function display_Data(showcase_Data) {
  var box = document.createElement("div");
  document.querySelector("#container").append(box);

  var showcase_img = document.createElement("img");
  showcase_img.setAttribute("src", showcase_Data.product_img);

  var info_div = document.createElement("div");
  info_div.setAttribute("id", "info_div");

  var showcase_name = document.createElement("h2");
  showcase_name.innerText = showcase_Data.product_name;

  var showcase_info = document.createElement("p");
  showcase_info.innerText = showcase_Data.product_info;

  var showcase_price = document.createElement("p");
  showcase_price.innerText = "Rs. " + showcase_Data.product_price;

  var showcase_size = document.createElement("p");
  showcase_size.innerText = "SIZE : " + showcase_Data.product_size;

  var important = document.createElement("div");
  important.setAttribute("id", "important");

  var imp_icon = document.createElement("i");
  imp_icon.setAttribute("class", "material-symbols-outlined");
  imp_icon.innerText = "error";

  var div_imp = document.createElement("span");
  div_imp.innerText = "IMPORTANT";
  div_imp.style.marginLeft = "10px";

  var div_imp_text = document.createElement("p");
  div_imp_text.innerText =
    "All products that will be shipped will have a shelf-life more than 8 months to 3 years.";
  div_imp_text.style.marginLeft = "35px";

  var color = document.createElement("div");
  color.innerText = "Color: No Colour";
  color.style.marginTop = "10px";

  important.append(imp_icon, div_imp, div_imp_text);

  info_div.append(
    showcase_name,
    showcase_info,
    showcase_price,
    showcase_size,
    important,
    color
  );

  box.append(showcase_img, info_div);
}

display_Data(showcase_Data);

/* CHECK PINCODE FORM */

document
  .querySelector("#check_pincode")
  .addEventListener("submit", function_submit);

function function_submit() {
  event.preventDefault();
  alert("Delivery within 5-7 Days");
}

/* SIMILAR PRODUCT DETAILS */

var similar_product = [
  {
    product_img:
      "https://cdn13.nnnow.com/web-images/medium/styles/FCNE5T2TV5T/1634887143628/1.jpg",
    product_name: "MOROCCANOIL",
    product_info: "Moisture Repair Shampoo",
    product_price: 1890,
    product_category: "Shampoo",
    product_gender: "women",
    product_size: "70 ML",
  },
  {
    product_img:
      "https://cdn13.nnnow.com/web-images/medium/styles/7TU00OK7QSV/1634888036586/1.jpg",
    product_name: "MOROCCANOIL",
    product_info: "Hydrating Shampoo",
    product_price: 2160,
    product_category: "Shampoo",
    product_gender: "women",
    product_size: "70 ML",
  },
  {
    product_img:
      "https://cdn13.nnnow.com/web-images/medium/styles/ZWAHDO65HEF/1634886962142/1.jpg",
    product_name: "MOROCCANOIL",
    product_info: "Smoothing Shampoo",
    product_price: 2160,
    product_category: "Shampoo",
    product_gender: "women",
    product_size: "70 ML",
  },
  {
    product_img:
      "https://cdn14.nnnow.com/web-images/medium/styles/ZXCZQG4LPA2/1586865417849/1.jpg",
    product_name: "Aveda",
    product_info: "Cherry Almond Softening Shampoo",
    product_price: 1300,
    product_category: "Shampoo",
    product_gender: "women",
    product_size: "200 ML",
  },
  {
    product_img:
      "https://cdn19.nnnow.com/web-images/medium/styles/PDOEXQ0ITGY/1586865417839/1.jpg",
    product_name: "Aveda",
    product_info: "Be Curly™ Shampoo",
    product_price: 2250,
    product_category: "Shampoo",
    product_gender: "women",
    product_size: "250 ML",
  },
];

similar_product.forEach(function (el) {
  var box = document.createElement("div");
  document.querySelector("#similar_product").append(box);
  box.style.textAlign = "center";

  var image = document.createElement("img");
  image.setAttribute("src", el.product_img);
  image.style.width = "80%";
  image.style.cursor = "pointer";
  image.addEventListener("click", function () {
    window.location.href = "product_page.html";
  });

  var name = document.createElement("h3");
  name.innerText = el.product_name;

  var info = document.createElement("p");
  info.innerText = el.product_info;

  var price = document.createElement("p");
  price.innerText = "Rs. " + el.product_price;

  box.append(image, name, info, price);

  // document
  //   .querySelector(".location_fav")
  //   .addEventListener("click", function_location_fav);

  // function function_location_fav() {
  //   window.location.href = "favourite.html";
  // }
  // document
  //   .querySelector("#addtobag")
  //   .addEventListener("click", function_location_cart);

  // function function_location_cart() {
  //   window.location.href = "cart_page.html";
  // }
});

var shop = document.getElementById("addtobag");
shop.addEventListener("click", function () {
  cart_data.push(showcase_Data);
  console.log(showcase_Data);
  localStorage.setItem("cart", JSON.stringify(cart_data));
});
var fav = document.getElementById("fav");
fav.addEventListener("click", function () {
  favourite_Data.push(showcase_Data);
  console.log(favourite_Data);
  localStorage.setItem("favourite", JSON.stringify(favourite_Data));
});

document.querySelector("#addtobag").addEventListener("click", function () {
  window.location.href = "cart_page.html";
});

document.querySelector(".location_fav").addEventListener("click", function () {
  window.location.href = "favourite.html";
});
