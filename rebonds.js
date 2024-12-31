window.onload = function()   




{
    var canvas = document.getElementById('mon_canvas');	
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

    var myInterval = setInterval(animate, 1000/100);	// 30 fois par seconde
	
	

 var x=6;		// abscisse initiale du centre du cercle
 var y=6;		// ordonnée iniiale du centre du cercle
 var a=1	// incrément de déplacement horizontal
 var b=1		// incrément de déplacement vertical
 var W=300;		// largeur du rectangle 
 var H=300;     // hauteur du rectangle
 var R=6;      // rayon du cercle 
 var min = 0;
 var max = 2;
 
 
 
 
 var L = 10;
 var l = 80;
 var B = 20;
 var pos_x =0;
 var pos_y = 300-(B+L);

var compteur = 0;


 var element = document.getElementsByTagName('h1');




function getRandomInt(min, max) {
	min=Math.ceil(min);								// compris entre min et max
	max=Math.floor(max);
	return Math.floor(Math.random()*(max-min))+min;
}


window.addEventListener("keydown", lect_clavier, true)

function lect_clavier(evt) {
    switch (evt.keyCode) {
        case 37:  // Flèche gauche
            pos_x = pos_x - 10;
        break;
        case 39:
            pos_x = pos_x +10;
        break;
    }


    if (pos_x < 0){
        pos_x =0;
    }

    if (pos_x >220){
        pos_x =220;
    }
}





function animate()
 {	
	
 
 
 
	x= x +a;
	y= y +b;
 
	if (x>= R, x<= W-R){
		if (y <= R){
			b = getRandomInt(min,max);
		}
		if (y>= H-R){
			b = -getRandomInt(min,max);
		}
		
	}	
	
		if (y>= R, y<= W-R){
		if (x <= R){
			a = getRandomInt(min,max);
		}
		if (x>= H-R){
			a = -getRandomInt(min,max);
		}
		
	}	

    if (x >= pos_x && x <= pos_x+l && y==pos_y-R ){
       
            b= -getRandomInt(min, max);
            compteur = compteur+1;
            
        
    }
   

    if (y > pos_y+L){
        
        
    }
    
    


    element[0].innerText = compteur;

    
	
	
		
	
   // Rectangle
   context.fillStyle = "rgb(199, 208, 204)"; 
   context.fillRect(0, 0, W, H);
   
   
   context.fillStyle= "rgb(255,0,0)";
   context.fillRect(pos_x,pos_y,l ,L);


   
   
   
  
   // Balle
   context.beginPath(); 			// Début d'un nouveau tracé.
   context.fillStyle = "rgb(96, 80, 220)"; 
  
   // A FINIR	
	
   context.arc(x,y,R, 0, Math.PI*2); 
   context.fill();					 // Méthode fill(); - forme pleine
   context.closePath();
   

 }

}








