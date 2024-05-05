// ##### Question 1: Write a JavaScript program to display the current day and time in the following format. #####

// const d = new Date();
// let day = d.getDay();
// console.log(day)
// const weekdays = ["Sunday", "Monday","Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
// let todayDay = weekdays[day]
// console.log(todayDay)

// document.getElementById('demo1').innerHTML = "Today is: " + todayDay

// let hour = d.getHours()

// let ampmhour;
// if (hour>12) {
//     ampmhour = 'PM'
// } else {
//     ampmhour = 'AM'
// }

// console.log(ampmhour)

// let min = d.getMinutes()
// let sec = d.getSeconds()

// console.log(hour, ampmhour, min, sec)

// document.getElementById('demo2').innerHTML = "Current Time is: " + hour + ampmhour + " : " + min + " : " + sec

// let time = d.toLocaleTimeString()

// console.log(time)

// document.getElementById('demo3').innerHTML = "Current Time is: " + time

// ##### Question 2: Write a JavaScript program to print the current window contents. #####

// function printMyScreen() {
//     window.print();
// }

// const date = new Date();
// let month = date.getMonth();
// let thisMonth = (month +1).toString().padStart(2,"0");

// let day = date.getDate().toString().padStart(2,"0");
// let year = date.getFullYear();

// console.log (thisMonth, day, year)
// document.getElementById('demo1').innerHTML = thisMonth + "-" + day + "-" + year;

// ##### Question 3: Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. #####

// function getArea() {
//     const m = document.getElementById('sideA')
//     let sideA = parseFloat(m.value)
//     const p = document.getElementById('sideB')
//     let sideB = parseFloat(p.value)
//     const t = document.getElementById('sideC')
//     let sideC = parseFloat(t.value)
//     console.log (sideA,sideB,sideC)

//     let surfaceArea = (sideA+sideB+sideC)/2
//     console.log(surfaceArea)
//     let area = Math.sqrt(surfaceArea*(surfaceArea-sideA)*(surfaceArea-sideB)*(surfaceArea-sideC))
//     console.log(area)
//     document.getElementById('area').innerHTML = "The Area of the triangle is: "+area
// }
