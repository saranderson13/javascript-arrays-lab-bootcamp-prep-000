var kittens = [ "Milo", "Otis", "Garfield" ] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(kittens, name) {
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(kittens, name) {
  kittens = [name, ...kittens];
  return kittens;
}