var cart_data = JSON.parse(localStorage.getItem("cart")) || [];

cart_data.forEach(function (el, index) {
  var box = document.createElement("div");
  document.querySelector("#container").append(box);
  box.style.display = "flex";
  box.style.height = "250px";

  var cart_img = document.createElement("img");
  cart_img.setAttribute("src", el.product_img);
  cart_img.style.width = "130px";

  var cart_info_div = document.createElement("div");
  cart_info_div.style.width = "300px";

  var cart_name = document.createElement("h3");
  cart_name.innerText = el.product_name;

  var cart_info = document.createElement("p");
  cart_info.innerText = el.product_info;

  var cart_color = document.createElement("p");
  cart_color.innerText = "Color: No colour";

  var cart_size = document.createElement("p");
  cart_size.innerText = el.product_size;

  var qty_div = document.createElement("div");
  qty_div.innerText = "Qty: ";
  qty_div.style.marginLeft = "30px";
  qty_div.style.paddingTop = "15px";
  qty_div.style.marginRight = "30px";

  var qty = document.createElement("select");
  qty.setAttribute("class", "selected");

  qty.addEventListener("change", function () {
    var changed_price = qty.value * el.product_price;
    cart_price.innerText = "Rs. " + changed_price;
  });

  var option1 = document.createElement("option");
  option1.value = 1;
  option1.text = "1";

  var option2 = document.createElement("option");
  option2.value = 2;
  option2.text = "2";

  var option3 = document.createElement("option");
  option3.value = 3;
  option3.text = "3";

  var option4 = document.createElement("option");
  option4.value = 4;
  option4.text = "4";

  var option5 = document.createElement("option");
  option5.value = 5;
  option5.text = "5";

  qty.add(option1);
  qty.add(option2);
  qty.add(option3);
  qty.add(option4);
  qty.add(option5);

  qty_div.append(qty);

  var cart_price = document.createElement("p");
  cart_price.innerText = "Rs. " + el.product_price;

  var cart_function = document.createElement("div");
  cart_function.style.display = "flex";
  cart_function.style.marginTop = "-40px";

  var move_to_fav = document.createElement("h5");
  move_to_fav.innerText = "Move To favourite";
  move_to_fav.style.textDecoration = "underline";
  move_to_fav.style.cursor = "pointer";

  move_to_fav.addEventListener("click", function () {
    window.location.href = "favourite.html";
  });

  var remove = document.createElement("h5");
  remove.innerText = "Remove";
  remove.style.textDecoration = "underline";
  remove.style.cursor = "pointer";
  remove.style.marginLeft = "20px";

  remove.addEventListener("click", function () {
    function_remove(el, index);
  });

  cart_function.append(move_to_fav, remove);

  cart_info_div.append(
    cart_name,
    cart_info,
    cart_color,
    cart_size,
    cart_function
  );

  box.append(cart_img, cart_info_div, qty_div, cart_price);
});

/* SHOW TOTAL */

var total = 0;

for (var i = 0; i < cart_data.length; i++) {

  total = total + cart_data[i].product_price;
}

document.querySelector(".append_subtotal").innerText = "Rs. " + total;
document.querySelector(".append_total").innerText = "Rs. " + total;

/* REMOVE FUNCTION */

function function_remove(el, index) {
  cart_data.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart_data));

  window.location.reload();
}

document.querySelector("#shop_more").addEventListener("click", function () {
  window.location.href = "product_page.html";
});

document.querySelector("#logo_img").addEventListener("click", function () {
  window.location.href = "homepage.html";
});

document.querySelector("#logo_img").style.cursor = "pointer";


var checkout = document.getElementById('checkout')
checkout.addEventListener('click', ()=>{
  console.log('hi')
  window.location.href = 'payment.html'
})
