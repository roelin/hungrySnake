    function $(id){return document.getElementById(id);} 
    //Snake Class
    var Snake = {  
        tbl: null,  
        body: [],  
        //NowDirection,values:0,1,2,3, up,right,down,left,change it by keyboard  
        direction: 0,  
        //定时器  
        timer: null,  
        //速度  
        speed: 250,  
        //行数  
        rowCount: 30,  
        //列数  
        colCount: 30,  
        
    }; 
	
	//init Snake  
	init = function(){  
  
        Snake.tbl = $("main");  
        var x = 0;  
        var y = 0;  
        var colorIndex = 0; 
        //create init direction  
        Snake.direction = Math.floor(Math.random()*4);  
        //create table map  
        for(var row=0;row<Snake.rowCount;row++){  
            var tr=Snake.tbl.insertRow(-1);  
            for(var col=0;col<Snake.colCount;col++) {  
                var td=tr.insertCell(-1);  
            }  
        }  
        //create dot 
         x = Math.floor(Math.random()*Snake.colCount);  
         y = Math.floor(Math.random()*Snake.rowCount);   
      
         Snake.tbl.rows[y].cells[x].style.backgroundColor = 'red';  
              
        //create snake  
        while(true){  
            x = Math.floor(Math.random()*Snake.colCount);  
            y = Math.floor(Math.random()*Snake.rowCount);  
            Snake.tbl.rows[y].cells[x].style.backgroundColor = "black";  
            Snake.body.push({x:x,y:y,color:'black'});  
            break;  
          
        }  
        //keyboard event
		document.onkeydown= function(e){  
			if (!e)e=window.event;             
			switch(e.keyCode | e.which | e.charCode){  
                    case 37:{//left  
                        
                        if(Snake.direction==1){  //can't go right 
                            break;  
                        }  
                        Snake.direction = 3;  
                        break;  
	
                    }  
                    case 38:{
                        if(Snake.direction==2){	//can't go down
                            break;  
                        }  
                        Snake.direction = 0;  
                        break;  
                    }  
                    case 39:{//right  
                        if(Snake.direction==3){//can't go left
                            break;  
                        }  
                        Snake.direction = 1;  
                        break;  
                    }  
                    case 40:{//down  
                        if(Snake.direction==0){//can't go up
                            break;  
                        }  
                        Snake.direction = 2;  
                        break;  
                    }  
                }  
            }  
   };  
	