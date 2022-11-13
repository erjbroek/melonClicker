const waterMelon = document.getElementById('watermelonClick');
const upgrades = document.getElementById('upgrades');
waterMelon.addEventListener('mousedown', mouseDown);
waterMelon.addEventListener('mouseup', mouseUp);

//upgrades.addEventListener('mousedown', function(event) { 
    // simulating hold event
    //setTimeout(function() {
      //  upgrades.setAttribute('style', 'background: red')
    //}, 500);
    //upgrades.setAttribute('style', 'background: blue')
  //});
  function mouseDown(){
    waterMelon.style.bottom = '18px';
  }

  function mouseUp(){
    waterMelon.style.bottom = '40px';
  }

  let melons = document.getElementById('upgra')
