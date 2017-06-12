checkNextStep = function(){  
	var point = getNextPos();  
	var x = point.x;  
	var y = point.y;  
	if(x<0||x>=Snake.colCount||y<0||y>=Snake.rowCount){  
		return -1;//broder
	}	  	
	for(var i=0; i<Snake.body.length; i++){  
		if(Snake.body[i].x==x&&Snake.body[i].y==y){  
			return -1;//myself body
		}  
	}  
	if(!Snake.tbl.rows[y].cells[x].style.backgroundColor == ""){  
		return 1;//cell
	}  
	return 0;//land
};  