const trigen = document.querySelector('.trigen');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if (event.keyCode == 32) {
        if (!isJumping){
               jump();
     
        }
    }
}

function jump() {
    
  
    let upInterval = setInterval(() => {
      
        if (position >= 200) {
            
            clearInterval(upInterval); 
            
            let downInterval = setInterval(() => {
                if (position <= 18){
                    
                    clearInterval(downInterval);
                    clearInterval(change);
                }else{
                    
                position -= 18;
                trigen.style.bottom = position + 'px';
                
                }
                
            }, 20);
        } else {
            position += 18;
            trigen.style.bottom = position + 'px';
           
        } 

    }, 20);
   
}


function createTrees(){
    const trees = document.createElement('div');
    let treesPos = 2000;
    let randomTime = Math.random() * 2000 + 500;
 
    trees.classList.add('trees');
    trees.style.left = 1000 + 'px';
    background.appendChild(trees);

    let leftInterval = setInterval(() => {
        treesPos -= 4;
        trees.style.left = treesPos + 'px';

        if (treesPos < -60){
            clearInterval(leftInterval);
            background.removeChild(trees);
        }else if (treesPos > 0 && treesPos < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else{
            treesPos -=10;
            trees.style.left = treesPos + 'px';
        }
    }, 20);
    setTimeout(createTrees, randomTime);
}
createTrees();
document.addEventListener('keyup', handleKeyUp);
