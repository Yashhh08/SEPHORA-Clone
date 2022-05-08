var favourite_Data = JSON.parse(localStorage.getItem("favourite"));

favourite_Data.forEach(function (el, index) {
  var box = document.createElement("div");
  document.querySelector("#container").append(box);
  box.style.display = "flex";
  box.style.textAlign = "left";

  var fav_img = document.createElement("img");
  fav_img.setAttribute("src", el.product_img);
  fav_img.style.width = "40%";

  var fav_info_div = document.createElement("div");
  fav_info_div.style.width = "350px";

  var fav_name = document.createElement("h3");
  fav_name.innerText = el.product_name;

  var fav_info = document.createElement("p");
  fav_info.innerText = el.product_info;

  var fav_color = document.createElement("p");
  fav_color.innerText = "Color: No colour";

  var fav_price = document.createElement("p");
  fav_price.innerText = "Rs. " + el.product_price;

  var fav_function = document.createElement("div");
  fav_function.style.display = "flex";
  fav_function.style.justifyContent = "left";

  var add_to_bag = document.createElement("h5");
  add_to_bag.innerText = "Move To Bag";
  add_to_bag.style.color = "rgb(250, 50, 83)";
  add_to_bag.style.cursor = "pointer";

  add_to_bag.addEventListener("click", function () {
    window.location.href = "cart_page.html";
  });

  var remove = document.createElement("h5");
  remove.innerText = "Remove";
  remove.style.color = "rgb(250, 50, 83)";
  remove.style.cursor = "pointer";
  remove.style.marginLeft = "50px";

  remove.addEventListener("click", function () {
    function_remove(el, index);
  });

  fav_info_div.append(fav_name, fav_info, fav_color, fav_price, fav_function);
  fav_function.append(add_to_bag, remove);
  box.append(fav_img, fav_info_div);
});

/* REMOVE FUNCTION */

function function_remove(el, index) {
  favourite_Data.splice(index, 1);

  localStorage.setItem("favourite", JSON.stringify(favourite_Data));

  window.location.reload();
}
