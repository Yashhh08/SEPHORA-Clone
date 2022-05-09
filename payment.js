function pagesMode(el) {
  if (el == 1) {
    document.getElementById("payment").classList.remove("active");
    document.getElementById("shipping").classList.add("active");
    document.getElementById("payment_left").style.display = "none";
    document.getElementById("shipping_left").style.display = "block";
    document.getElementById("coupon").style.display = "flex";
  } else if (el == 2) {
    document.getElementById("shipping").classList.remove("active");
    document.getElementById("payment").classList.add("active");
    document.getElementById("payment_left").style.display = "block";
    document.getElementById("shipping_left").style.display = "none";
    document.getElementById("coupon").style.display = "none";
  }
}

for (var i = 1; i <= 5; i++) {
  var div = document.getElementById(i);
  div.style.display = "none";
}

function showDiv(el) {
  for (var i = 1; i <= 5; i++) {
    var div = document.getElementById(i);
    if (el == i) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// Danamic data

var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
let uniqueProducts = [];

cart_data.forEach((c) => {
  var uniqueCount = 0;
  for (var i = 0; i < uniqueProducts.length; i++) {
    if (uniqueProducts[i].product_name == c.product_name) {
      uniqueCount++;
    }
  }
  if (uniqueCount == 0) {
    uniqueProducts.push(c);
  }
});

console.log(uniqueProducts);
var index = 0;
uniqueProducts.forEach((el) => {
  var count = 0;

  var productName = el.product_name;
  for (var i = 0; i < cart_data.length; i++) {
    if (cart_data[i].product_name == productName) {
      count++;
    }
  }

  var product_qty = count;

  var mainDiv = document.getElementById("product_detailes");
  var leftDiv = document.getElementById("product_left");
  var img = document.createElement("img");
  var pCategory = document.createElement("p");
  var pName = document.createElement("p");
  var pInfo = document.createElement("p");
  var pSize = document.createElement("p");
  var pQty = document.createElement("p");
  var pTotal = document.createElement("p");
  var hr = document.createElement("hr");
  var rightDiv = document.getElementById("product_right");
  var cardDiv = document.createElement("div");
  var detailesDiv = document.createElement("div");
  console.log(count);

  if (index == uniqueProducts.length - 1) {
    var hr = "";
  } else {
    var hr = document.createElement("hr");
  }
  // set data to variables
  img.src = el.product_img;
  pCategory.innerText = el.product_category;
  pName.innerText = el.product_name;
  pInfo.innerText = el.product_info;
  pSize.innerText = el.product_size;
  pQty.innerText = count;
  var totalPrice = count * el.product_price;
  pTotal.innerText =
    "Rs. " + totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  rightDiv.innerHTML = `  <div class="right">
    <input type="radio" name="delivery" id="">
    <label for="delivery">Delivery within 5-7 days</label>
  </div>`;
  // Add class
  pTotal.classList.add("bold");
  pName.classList.add("bold");
  leftDiv.classList.add("left");
  detailesDiv.classList.add("detailse");
  rightDiv.classList.add("right");
  cardDiv.classList.add("product_card");

  // Append data
  detailesDiv.append(pCategory, pName, pInfo, pSize, pQty, pTotal);
  cardDiv.append(img, detailesDiv);
  leftDiv.append(cardDiv, hr);
  mainDiv.append(leftDiv, rightDiv);
  console.log(product_qty);
  index++;
});

// Right

var totalMoney = 0;
cart_data.forEach((el) => {
  totalMoney += el.product_price;
});
var discount = Math.floor(Math.random() * 1000);
document.getElementById("subTotalMoney").innerText =
  "Rs. " + totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("discount").innerText =
  "Rs. " + discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("totalMoney").innerText =
  "Rs. " +
  (totalMoney - discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(totalMoney);

document.getElementById("editBag").addEventListener("click", () => {
  window.location.href = "cart_page.html";
});
// Address/////////

document.getElementById("placeOrder").addEventListener("click", () => {
  if (!document.getElementById("shipping").classList.contains("active")) {
    window.location.href = "done.html";
  }
});



// Addresses

var col = JSON.parse(localStorage.getItem('address')) || [];
var mainDiv = document.getElementById('addresses')
col.forEach((el)=>{
  var address = el.Name+', '+el.Address+', '+el.Phone+', '+el.AlternativeNumber+', '+el.Pincode+', '+el.Landmark
  var pContainer = document.createElement('div')
  pContainer.classList.add('address_card')
    var p = document.createElement('p')
    p.textContent = address
    p.style.padding = '10px'

    pContainer.append(p)
    mainDiv.append(pContainer)

  console.log(address)
})

document.getElementById('changeNut').addEventListener('click', ()=>{
 
  div.style.backgroundColor = 'black';
  document.body.classList.add('.faded')
  document.getElementById('my_addresses').style.display = 'block'
  document.getElementById('faded').classList.add('faded')
})

document.getElementById('close').addEventListener('click', ()=>{
 
  document.body.classList.remove('.faded')
  document.getElementById('my_addresses').style.display = 'none'
  document.getElementById('faded').classList.remove('faded')
})



document.getElementById('addAddress').addEventListener('click', ()=>{
 
window.location.href = 'addAddress.html'
})


// var user_add= JSON.parse(localStorage.getItem('address'))

// document.querySelector(".address_text").innerText= user_add.Addres