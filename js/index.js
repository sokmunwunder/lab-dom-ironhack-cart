// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.units');
  const actualPrice = price.innerHTML;
  const actualQuantity = quantity.innerHTML;
  const actualSubTotal= actualPrice*actualQuantity;
  const subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerHTML= actualSubTotal;
  return subTotalElement;
  //... your code goes here
}



//function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  //updateSubtotal(document.getElementsByClassName('product'));
  //calculateAll(updateSubtotal);




  // ITERATION 2
  //... your code goes here
function calculateAll() {
//const singleProduct = document.querySelector('.product');
//updateSubtotal(singleProduct);
const productElements = document.getElementsByClassName('product');
//const priceFirstProduct = product.getElementsByClassName('.product .firstPrice');
//const priceSecondProduct =product.getElementsByClassName('.product .secondPrice');
for(let i=0, i<=productElements.length, i++){
  const totalValue = 0 += updateSubtotal(productElements[i]);
}
return totalValue;
}
  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
