function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;

    if (name && email) {
        alert(`Thank you, ${name}, for signing up as a ${category}!`);
    } else {
        alert('Please fill in all fields.');
    }
}

function learnMore() {
    alert("The Recycle Challenge encourages turning trash into treasure. Join us to make a difference!");
}

function browseItems() {
    alert("Explore a variety of second-hand items and find great deals!");
}

function viewPaintings() {
    alert("Check out unique paintings made from recycled materials!");
}

function checkTokens() {
    alert("You have 10 tokens! Keep participating to earn more discounts.");
}
