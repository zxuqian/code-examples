function handleClick(event) {
  event.stopPropagation();
  console.log(event.currentTarget.id);
}

for (let i = 1; i <= 3; i++) {
  let div = document.getElementById(`div${i}`);
  div.addEventListener("click", handleClick);
}
