let items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item => {
    item.addEventListener('mousemove', (e)=>{
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);


        let positionPy = event.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;


        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })


    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})

setInterval(()=>{
    const time = document.querySelector(".display #time");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });



  


  
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

