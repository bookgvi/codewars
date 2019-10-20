let wrap = document.querySelector('.wrap')
let blueArr = [];
let count = 0;
let neighbors = 0;
let fragment = new DocumentFragment()
   for (col = 0; col < 30; col++){
     blueArr[col] = []
      for(row = 0; row < 30; row++){
        
        let div = document.createElement('div');
        div.dataset.x = row;
        div.dataset.y = col;
        div.dataset.bool = '0';
        div.dataset.neighbors = '0';
        blueArr[col][row]= div;
        fragment.appendChild(div);
      }
    }
		wrap.appendChild(fragment);

/*let block = document.querySelectorAll('.wrap div');*/

	
		wrap.onclick = function(e){
			if(e.target === e.currentTarget){
				return
			}
				e.target.style.background = 'blue';
				e.target.dataset.bool = '1'
				/*let y = e.target.dataset.y;
				let x = e.target.dataset.x;*/
				/*blueArr[y][x] = 1;*/
		}
		
function start(){
	for(let i = 0; i < 30; i++){
		for(let j = 0; j < 30; j++){
			if(blueArr[i][j].dataset.bool == 1) blueArr[fpm(i) + 1][j].dataset.neighbors ++; // верх
      else if (blueArr[fpm(i) + 1][j].dataset.neighbors !== 0) blueArr[fpm(i) + 1][j].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1) blueArr[fpp(i) - 1][j].dataset.neighbors ++; // вниз
      else if (blueArr[fpp(i) - 1][j].dataset.neighbors !== 0) blueArr[fpp(i) - 1][j].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1) blueArr[i][fpp(j) - 1].dataset.neighbors ++; // влево
      else if (blueArr[i][fpp(j) - 1].dataset.neighbors !== 0) blueArr[i][fpp(j) - 1].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1)  blueArr[i][fpm(j) + 1].dataset.neighbors ++; // вправо
      else if (blueArr[i][fpm(j) + 1].dataset.neighbors !== 0) blueArr[i][fpm(j) + 1].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1)  blueArr[fpp(i) - 1][fpp(j) - 1].dataset.neighbors ++; // верх-влево
      else if (blueArr[fpp(i) - 1][fpp(j) - 1].dataset.neighbors !== 0) blueArr[fpp(i) - 1][fpp(j) - 1].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1) blueArr[fpp(i) - 1][fpm(j) + 1].dataset.neighbors ++; // верх-вправо
      else if (blueArr[fpp(i) - 1][fpm(j) + 1].dataset.neighbors !== 0) blueArr[fpp(i) - 1][fpm(j) + 1].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1) blueArr[fpm(i) + 1][fpp(j) - 1].dataset.neighbors ++; // вниз-влево
      else if (blueArr[fpm(i) + 1][fpp(j) - 1].dataset.neighbors !== 0) blueArr[fpm(i) + 1][fpp(j) - 1].dataset.neighbors --
      
			if(blueArr[i][j].dataset.bool == 1) blueArr[fpm(i) + 1][fpm(j) + 1].dataset.neighbors ++; // вниз-вправо
			else if (blueArr[fpm(i) + 1][fpm(j) + 1].dataset.neighbors !== 0) blueArr[fpm(i) + 1][fpm(j) + 1].dataset.neighbors --
      
      
      console.log(blueArr[i][j].dataset.neighbors)

			if(blueArr[i][j].dataset.neighbors === 2 || blueArr[i][j].dataset.neighbors === 3){
				blueArr[i][j].dataset.bool = 1;
        blueArr[i][j].style.background = 'blue';
			}else{
				blueArr[i][j].dataset.bool = 0;
        blueArr[i][j].style.background = 'white';
        blueArr[fpp(i) - 1][j].dataset.neighbors = 0
        blueArr[i][fpp(j) - 1].dataset.neighbors = 0
        blueArr[i][fpm(j) + 1].dataset.neighbors = 0
        blueArr[fpp(i) - 1][fpm(j) + 1].dataset.neighbors = 0
        blueArr[fpp(i) - 1][fpp(j) - 1].dataset.neighbors = 0
        blueArr[fpm(i) + 1][fpp(j) - 1].dataset.neighbors = 0
        blueArr[fpm(i) + 1][fpm(j) + 1].dataset.neighbors = 0
        neighbors = 0
			}


		}

	}
	
	count++;
	document.querySelector('.count').innerHTML = count;
	setTimeout(start, 1300);

}



function fpm(i){
	if(i == 29) return -1
	else return i
}
function fpp(i){
	if(i == 0) return 30
	else return i
}

document.querySelector('button').onclick = start















