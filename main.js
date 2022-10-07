window.onload = function(){
    const canvas = document.getElementById("canvas")
    const c = canvas.getContext("2d")
    
    
    var bgTile = new Image();
    bgTile.src = 'map1.png';    
    const grass = function(){

      c.drawImage(bgTile,49,0,16,16,0,0,16,16)
        

    }

    bgTile.onload = function(){
        for(var i = 0; i < 38; i++){
            c.drawImage(bgTile,49,0,16,16,0+(50*i),0(50*i),64,64);
            }
    }
}


