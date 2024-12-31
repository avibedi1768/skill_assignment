var num = 0
function createInputs() {
  var n = Number(document.getElementById("num").value)

  if (isNaN(n)) {
    window.alert("Please enter a number")
  }
  num = n
  console.log(n)

  document.getElementById("inp-num").style.display = "none"
  document.getElementById("inputs").style.display = "block"

  var label = document.createElement("label")
  label.innerHTML = "Enter marks in all subjects!"
  document.getElementById("inputs").appendChild(label)

  for (var i = 1; i <= n; i++) {
    var input = document.createElement("input")
    input.id = "input" + i
    document.getElementById("inputs").appendChild(input)
  }

  var b = document.createElement("input")
  b.type = "button"
  b.value = "Submit"
  b.onclick = findGrade
  document.getElementById("inputs").appendChild(b)
}

function findGrade() {
  console.log("lol")
  document.getElementById("outputs").style.display = "block"
  document.getElementById("outputs").innerHTML = ""

  var total = 0

  for (var i = 1; i <= num; i++)
    total += Number(document.getElementById("input" + i).value)
  var avg = total / num
  avg = avg.toFixed(2)

  console.log(total + " " + avg)

  var p = document.createElement("p")
  p.innerHTML = "Your total marks: " + total

  var p1 = document.createElement("p")
  p1.innerHTML = "Your average: " + avg + "%"

  var grade

  if (avg >= 90) {
    grade = "A"
  } else if (avg >= 80) {
    grade = "B"
  } else if (avg >= 70) {
    grade = "C"
  } else if (avg >= 60) {
    grade = "D"
  } else if (avg >= 40) {
    grade = "E"
  } else {
    grade = "F"
  }

  var p2 = document.createElement("p")
  p2.innerHTML = "Your grade: " + grade

  document.getElementById("outputs").append(p, p1, p2)

  if (grade == "F") {
    var p3 = document.createElement("p")
    p3.innerHTML = "You have failed!! Work hard!!"
    document.getElementById("outputs").appendChild(p3)
  }

  if (avg == 100) {
    var p3 = document.createElement("p")
    p3.innerHTML = "You have topped!!"
    document.getElementById("outputs").appendChild(p3)
  }

}