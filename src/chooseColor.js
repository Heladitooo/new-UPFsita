function chooseColor() {
  let random = Math.floor(Math.random() * 2);
  if (random == 1) {
    return "#0099cc";
  } else {
    return "#ff9900";
  }
}

module.exports = chooseColor;
