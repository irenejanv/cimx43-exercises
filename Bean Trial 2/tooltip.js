// 0. Set things up so you can interact with blue rectangles.
let dish_labels = document.getElementsByClassName('dish');
let dishes = Array.from(dish_labels);
// to do this for text boxes, (1) svg text elements need a class "dish_text" and them make sure they have an idea that is "dish-0-text". Repeat lines 2-3 and then lines 5-8.
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
  let dish_number = id.split('-')[1];
  // Show the box the picture is in:
  document.getElementById('show-dish-' + dish_number).style.display = 'block';
  document.getElementById('show-dish-' + dish_number).style.backgroundColor =
    'white';
  document.getElementById('show-dish-' + dish_number).style.width = '150px';
  document.getElementById('show-dish-' + dish_number).style.height = '150px';
}

// 2. What happens when you mouse out of the blue rectangle
function hideIllustration() {
  let id = this.id;
  console.log(id);
  let dish_number = id.split('-')[1];

  // Show the box the picture is in:
  document.getElementById('show-dish-' + dish_number).style.display = 'none';
}
