 
  function clock(){
      
    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;               

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

}var inter = setInterval(clock,400);




// ticker clock  

  console.log("");
  let now = new Date();
  console.log(now);

  let dt = new Date(1000);
  console.log(dt);

  // let newDate = new Date("2029-09-30");
  // console.log(newDate)

  // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
  let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
  console.log(newDate);

  let yr = newDate.getFullYear();
  console.log("The year is ", yr);

  let dat = newDate.getDate();
  console.log("The date is ", dat);

  let month = newDate.getMonth();
  console.log("The month is ", month);

  let hours = newDate.getHours();
  console.log("The hours is ", hours);

  newDate.setDate(8);
  newDate.setMinutes(29);
  console.log(newDate)
  setInterval(updateTime, 1000);

  function updateTime() {
      td.innerHTML = new Date();
  }