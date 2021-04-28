// 0. Set things up so you can interact with blue rectangles.
let dish_labels = document.getElementsByClassName('dish');
let dishes = Array.from(dish_labels);
for (let i = 0; i < dishes.length; i++) {
  dishes[i].addEventListener('mouseenter', showIllustration);
  dishes[i].addEventListener('mouseleave', hideIllustration);
}

// 1. What happens when you mouse over the blue rectangle
function showIllustration() {
  // What food are we going to show?
  // Check the id of the rectangle we're hovering over.
  let id = this.id;
  console.log(id);

  // Make sure we use the right picture
  document
    .getElementById('show-dish-picture')
    .setAttribute('src', 'img/' + this.id + '.jpg');

  // Show the box the picture is in:
  document.getElementById('show-dish').style.display = 'block';
  document.getElementById('show-dish').style.backgroundColor = 'blue';
  document.getElementById('show-dish').style.padding = '4px';
  document.getElementById('show-dish').style.maxWidth = '60px';
}

// 2. What happens when you mouse out of the blue rectangle
function hideIllustration() {
  // document.getElementById('show-dish').style.display = 'none';
}
