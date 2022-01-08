// select value and buttons set value to 0

  const buttons = document.querySelectorAll('.btn');
  const value = document.querySelector("#value");
  let count = 0;

//  iterate through the buttons forEach 
// function for the buttons in event listener if () {} else if {}  else {}
// if the style says "increase" ++1, decrase --1, else 0
buttons.forEach(function (btn) {
btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
} else if (styles.contains("increase")) {
        count ++;
    } else {
        count = 0;
    }
  
// if value is less than 0 red, 0 black, greater than 1 green
 if (count > 0) {
     value.style.color = "green";
}
if (count < 0) {
    value.style.color = "red";
}
if (count === 0) {
    value.style.color = "black";
}
value.textContent = count;
});
})
