console.log("hello")
var n = Math.random()
console.log(n)
var count = 0

function setLevel() {
  document.getElementById("input-box").style.display = "block"
  document.getElementById("level-box").style.display = "none"

  if (document.getElementById("one").checked) {
    console.log("one")
    document.getElementById("diff-h1").innerHTML = "level 1"
    n = parseInt(n * 100)
  } else if (document.getElementById("two").checked) {
    console.log("two")
    document.getElementById("diff-h1").innerHTML = "level 2"
    n = parseInt(n * 150)
  } else if (document.getElementById("three").checked) {
    console.log("three")
    document.getElementById("diff-h1").innerHTML = "level 3"
    n = parseInt(n * 200)
  }

  console.log(n)
}

function checkInput() {
  var input = document.getElementById("num").value
  console.log(input)
  count++

  if (input == n) {
    console.log("success")
    document.getElementById("total-count").innerHTML = "you took " + `<b>${count}</b>` + " steps to conclude to the number!!"

    document.getElementById("input-box").style.display = "none"
    document.getElementById("steps").style.display = "none"
    document.getElementById("final-output").style.display = "block"
  } else if (input < n) {
    document.getElementById("high").style.display = "none"
    document.getElementById("low").style.display = "block"
  } else {
    document.getElementById("high").style.display = "block"
    document.getElementById("low").style.display = "none"
  }

  document.getElementById("num").value = ""
}