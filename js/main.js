document.querySelector('#begin').addEventListener('click', hide);
function hide(){
  document.querySelector('.openning').style.display = 'none'
}

document.querySelector('#ok').addEventListener('click', moveOnW);
function moveOnW(){
  document.querySelector('.win').style.display = 'none';
}
document.querySelector('#ook').addEventListener('click', moveOnL);
function moveOnL(){
  document.querySelector('.loss').style.display = 'none';
}
document.querySelector('#oook').addEventListener('click', moveOnD);
function moveOnD(){
  document.querySelector('.draw').style.display = 'none';
}
document.querySelector('#ooook').addEventListener('click', moveOnDEF);
function moveOnDEF(){
  document.querySelector('.defeat').style.display = 'none';
  drawCounter = 0
  counterB = 0
  counterU = 0
  document.querySelector('#b3').classList = ''
  document.querySelector('#b2').classList = ''
  document.querySelector('#b1').classList = ''
  document.querySelector('#u3').classList = ''
  document.querySelector('#u2').classList = ''
  document.querySelector('#u1').classList = ''
  location.reload()
}
document.querySelector('#oooook').addEventListener('click', moveOnVIC);
function moveOnVIC(){
  document.querySelector('.victory').style.display = 'none';
  drawCounter = 0
  counterB = 0
  counterU = 0
  document.querySelector('#b3').classList = ''
  document.querySelector('#b2').classList = ''
  document.querySelector('#b1').classList = ''
  document.querySelector('#u3').classList = ''
  document.querySelector('#u2').classList = ''
  document.querySelector('#u1').classList = ''
  location.reload()
}
document.querySelector('#ooooook').addEventListener('click', moveOnDID);
function moveOnDID(){
  document.querySelector('.victory').style.display = 'none';
  drawCounter = 0
  counterB = 0
  counterU = 0
  document.querySelector('#b3').classList = ''
  document.querySelector('#b2').classList = ''
  document.querySelector('#b1').classList = ''
  document.querySelector('#u3').classList = ''
  document.querySelector('#u2').classList = ''
  document.querySelector('#u1').classList = ''
  location.reload()
}

document.querySelector('#start').addEventListener('click', hideMain);
function hideMain(){
  document.querySelector('.main').style.display = 'none'
}

document.querySelector('#choose').addEventListener('click', battle);
let trainersChoice 
let botsChoice
let user
let bot
///////////////////////////////set life points img///////////////////
fetch(`https://pokeapi.co/api/v2/item/poke-ball/`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  document.querySelector('#u1').src = data.sprites.default;
  document.querySelector('#u2').src = data.sprites.default;
  document.querySelector('#u3').src = data.sprites.default;
  document.querySelector('#b1').src = data.sprites.default;
  document.querySelector('#b2').src = data.sprites.default;
  document.querySelector('#b3').src = data.sprites.default;

        })
        
      .catch(err => {
       console.log(`error ${err}`)
        });
///////////////////sets the sprite before the function runs/////////////////////
document.querySelector('.bot').style.width = '30%';
document.querySelector('.trainer').style.width = '30%';
fetch(`https://pokeapi.co/api/v2/item/poke-ball/`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  document.querySelector('.bot').src = data.sprites.default;
  document.querySelector('.trainer').src = data.sprites.default;   
        })
        
      .catch(err => {
       console.log(`error ${err}`)
        });
        
/////////// Function Starts Here /////////////////////


function battle(){
  trainersChoice = document.querySelector('input').value
  botsChoice = Math.floor(Math.random()*151)
  fetch(`https://pokeapi.co/api/v2/pokemon/${trainersChoice.toLowerCase()}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
     if(data.id > 151){
     
      document.querySelector('.bot').style.width = '30%';
      document.querySelector('.trainer').style.width = '30%';
      fetch(`https://pokeapi.co/api/v2/item/poke-ball/`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data)
      document.querySelector('.bot').src = data.sprites.default;
      document.querySelector('.trainer').src = data.sprites.default;
    
    
      })
      
    .catch(err => {
     console.log(`error ${err}`)
      });
      alert('Please Pick one of the Original 150 Pokemon');

//get past incorrect inputs /////////////////////
//Trainer Chooses////////////////////////////////      
    }else{
      document.querySelector('.form').style.display = 'none'
      document.querySelector('#fight').classList = ""
    document.querySelector('.bot').style.width = '50%';
    document.querySelector('.trainer').style.width = '50%';
    document.querySelector('#utype').innerHTML = `${data.types[0].type.name}`
    document.querySelector('#uname').innerHTML = `${(data.name)}`
    document.querySelector('.trainer').src = data.sprites.front_default;
    user = document.querySelector('#utype').innerHTML = `${data.types[0].type.name}`
     
//Site Chooses Pokemon//////////////////////////////////////////////

  fetch(`https://pokeapi.co/api/v2/pokemon/${botsChoice}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    
    document.querySelector('#btype').innerHTML = `${data.types[0].type.name}`
    document.querySelector('#bname').innerHTML = `${(data.name)}`
    document.querySelector('.bot').src = data.sprites.front_default;
    bot = document.querySelector('#btype').innerHTML = `${data.types[0].type.name}`
       
          })

          
        .catch(err => {
         console.log(`error ${err}`)
          });
    
           
    
         }})
// This is the error catcher for when a user doesnt input an actual pokemon//////////////////          
        .catch(err => {
         console.log(`error ${err}`)
         
//resets all the sprites and names and types /////////////////////////
         document.querySelector('#utype').innerHTML = ``
         document.querySelector('#uname').innerHTML = ``
         //document.querySelector('.trainer').src = ``;

        document.querySelector('#btype').innerHTML = ``
        document.querySelector('#bname').innerHTML = ``
        //document.querySelector('.bot').src = ``;

        document.querySelector('.bot').style.width = '30%';
        document.querySelector('.trainer').style.width = '30%';
        fetch(`https://pokeapi.co/api/v2/item/poke-ball/`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        document.querySelector('.bot').src = data.sprites.default;
        document.querySelector('.trainer').src = data.sprites.default;
      

        })
        
      .catch(err => {
       console.log(`error ${err}`)
        });
        alert('Please check your spelling and make sure you pick one of the original 150 Pokemon');
          });
        



} //end of function

//////////////////////////////////////////////////////2nd PART/////////////////////////////////////////////////////
document.querySelector('#fight').addEventListener('click', result);
let counterU = 0
let counterB = 0
let drawCounter = 0
function result(){
  document.querySelector('.form').style.display = 'flex'
  document.querySelector('#fight').classList = "hidden"
  document.querySelector('input').value = ""  
///////////////////sets the sprite before the function runs/////////////////////  
document.querySelector('.bot').style.width = '30%';
document.querySelector('.trainer').style.width = '30%';
fetch(`https://pokeapi.co/api/v2/item/poke-ball/`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  document.querySelector('.bot').src = data.sprites.default;
  document.querySelector('.trainer').src = data.sprites.default;    
        })
        
      .catch(err => {
       console.log(`error ${err}`)
        });
        document.querySelector('#utype').innerHTML = ``
        document.querySelector('#uname').innerHTML = ``
        //document.querySelector('.trainer').src = ``;

       document.querySelector('#btype').innerHTML = ``
       document.querySelector('#bname').innerHTML = ``
       //document.querySelector('.bot').src = ``;
///////////////////////////
///////////////////////////
////////////////////////////
///////////////////////////
if(user == 'normal' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'fighting'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'normal' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'ground'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'normal' && bot == 'rock'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
  
}else if(user == 'normal' && bot == 'ghost'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
  
}else if(user == 'normal' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++

///Fire Types

}else if(user == 'fire' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'water'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
  
}else if(user == 'fire' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'grass'){
  document.querySelector('.win').style.display = 'block';

}else if(user == 'fire' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
  
}else if(user == 'fire' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
}else if(user == 'fire' && bot == 'rock'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
  
}else if(user == 'fire' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fire' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Water Types

else if(user == 'water' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'fire'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'water' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'electric'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'water' && bot == 'grass'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'water' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'gound'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'water' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'rock'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'water' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'water' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Electric Types

else if(user == 'electric' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'water'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'electric' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'ice'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'electric' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'gound'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'electric' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'rock'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'electric' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'electric' && bot == 'flying'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}

///Grass Types

else if(user == 'grass' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'fire'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'grass' && bot == 'water'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'grass' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'ice'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'grass' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'poison'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'grass' && bot == 'gound'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'grass' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'bug'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'grass' && bot == 'rock'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'grass' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'grass' && bot == 'flying'){
  document.querySelector('.loss').style.display = 'block';
  counterB ++
}

///Ice Types

else if(user == 'ice' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'fire'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'ice' && bot == 'water'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ice' && bot == 'electric'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'ice' && bot == 'grass'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ice' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ice' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ice' && bot == 'flying'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}

///Fighting Types

else if(user == 'fighting' && bot == 'normal'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'fighting' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'poison'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'fighting' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'psychic'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'fighting' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'fighting' && bot == 'rock'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'fighting' && bot == 'ghost'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'fighting' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fighting' && bot == 'flying'){
  document.querySelector('.loss').style.display = 'block';
  counterB ++
}

///Poison types

else if(user == 'poison' && bot == 'normal'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'poison' && bot == 'fire'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'poison' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'poison' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'poison' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'psychic'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'poison' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'rock'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'poison' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'poison' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Ground Types

else if(user == 'ground' && bot == 'normal'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'fire'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'water'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'ground' && bot == 'electric'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'grass'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'ground' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'ground' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ground' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ground' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ground' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'rock'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ground' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ground' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ground' && bot == 'flying'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}

///Flying Types

else if(user == 'flying' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'electric'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'flying' && bot == 'grass'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'flying' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'flying' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'flying' && bot == 'poison'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'flying' && bot == 'gound'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'flying' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'flying' && bot == 'rock'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'flying' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'flying' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Psychic Types

else if(user == 'psychic' && bot == 'normal'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'psychic' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'psychic' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'psychic' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Bug Types

else if(user == 'bug' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'fire'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'bug' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'grass'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'bug' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'bug' && bot == 'fighting'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'bug' && bot == 'poison'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'bug' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'bug' && bot == 'flying'){
  document.querySelector('.loss').style.display = 'block';
  counterB ++
}

///Rock Types

else if(user == 'rock' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'rock' && bot == 'fire'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'rock' && bot == 'water'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'rock' && bot == 'electric'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'rock' && bot == 'grass'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'rock' && bot == 'ice'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'rock' && bot == 'fighting'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'rock' && bot == 'poison'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'rock' && bot == 'gound'){
  document.querySelector('.loss').style.display = 'block';
  counterB++
}else if(user == 'rock' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'rock' && bot == 'bug'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'rock' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'rock' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'rock' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'rock' && bot == 'flying'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}

///Ghost Types

else if(user == 'ghost' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'ghost'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ghost' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'ghost' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Dragon Types

else if(user == 'dragon' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'fighting'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'dragon' && bot == 'dragon'){
  document.querySelector('.win').style.display = 'block';
  counterU++
}else if(user == 'ghost' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Fairy Types///

else if(user == 'fairy' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'water'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'electric'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}else if(user == 'fairy' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'gound'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'psychic'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}else if(user == 'fairy' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'ghost'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}else if(user == 'fairy' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'fairy' && bot == 'flying'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}

///Steel Types///

else if(user == 'steel' && bot == 'normal'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'fire'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'water'){
  document.querySelector('.loss').style.display = 'block';
  counterB ++
}else if(user == 'steel' && bot == 'electric'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}else if(user == 'steel' && bot == 'grass'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'ice'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'fighting'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}else if(user == 'steel' && bot == 'poison'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'gound'){
  document.querySelector('.loss').style.display = 'block';
  counterB ++
}else if(user == 'steel' && bot == 'psychic'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'bug'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'rock'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'ghost'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'dragon'){
  document.querySelector('.draw').style.display = 'block';
  drawCounter ++
}else if(user == 'steel' && bot == 'flying'){
  document.querySelector('.win').style.display = 'block';
  counterU ++
}

//////

// console.log(counterB)
// console.log(counterU)

if(drawCounter === 3){
  drawCounter = 0
  counterB = 0
  counterU = 0
  document.querySelector('.didntLose').style.display = 'block'
}
if(counterU === 1){
  document.querySelector('#b3').style.display = 'none'
}else if(counterU === 2){
  document.querySelector('#b3').style.display = 'none'
  document.querySelector('#b2').style.display = 'none'
}else if(counterU === 3){
  document.querySelector('#b3').style.display = 'none'
  document.querySelector('#b2').style.display = 'none'
  document.querySelector('#b1').style.display = 'none'
  counterB = 0
  counterU = 0
  document.querySelector('.victory').style.display = 'block';
}

if(counterB === 1){
  document.querySelector('#u3').style.display = 'none'
}else if(counterB === 2){
  document.querySelector('#u3').style.display = 'none'
  document.querySelector('#u2').style.display = 'none'
}else if(counterB === 3){
  document.querySelector('#u3').style.display = 'none'
  document.querySelector('#u2').style.display = 'none'
  document.querySelector('#u1').style.display = 'none'
  counterB = 0
  counterU = 0
  document.querySelector('.defeat').style.display = 'block';
}

  

}//end of second function////////////////////////////////////////////////



//three draws and the user "You wore out your opponent with out even using a type advantage! Congratulations!!!"

// //if else statements for rules of game
// if(user == 'normal' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'fighting'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'normal' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'ground'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'flying'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'normal' && bot == 'rock'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'normal' && bot == 'ghost'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'normal' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';

// ///Fire Types

// }else if(user == 'fire' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'water'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fire' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'grass'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'fire' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fire' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'fire' && bot == 'rock'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fire' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fire' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Water Types

// else if(user == 'water' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'fire'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'water' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'electric'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'water' && bot == 'grass'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'water' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';//
// }else if(user == 'water' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'gound'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'water' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'rock'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'water' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'water' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Electric Types

// else if(user == 'electric' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'water'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'electric' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'ice'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'electric' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'gound'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'electric' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'rock'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'electric' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'electric' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Grass Types

// else if(user == 'grass' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'fire'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'grass' && bot == 'water'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'grass' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'ice'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'grass' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'poison'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'grass' && bot == 'gound'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'grass' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'bug'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'grass' && bot == 'rock'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'grass' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'grass' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Ice Types

// else if(user == 'ice' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'fire'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'ice' && bot == 'water'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ice' && bot == 'electric'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'ice' && bot == 'grass'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ice' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ice' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ice' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Fighting Types

// else if(user == 'fighting' && bot == 'normal'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'fighting' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'poison'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fighting' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'fighting' && bot == 'psychic'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fighting' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'fighting' && bot == 'rock'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'fighting' && bot == 'ghost'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'fighting' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Poison types

// else if(user == 'poison' && bot == 'normal'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'poison' && bot == 'fire'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'poison' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'poison' && bot == 'fighting'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'poison' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'psychic'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'poison' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'rock'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'poison' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'poison' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Ground Types

// else if(user == 'ground' && bot == 'normal'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'fire'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'water'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'ground' && bot == 'electric'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'grass'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'ground' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'ground' && bot == 'fighting'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ground' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ground' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ground' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'rock'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ground' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ground' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Flying Types

// else if(user == 'flying' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'flying' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'flying' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'flying' && bot == 'electric'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'flying' && bot == 'grass'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'flying' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'flying' && bot == 'fighting'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'flying' && bot == 'poison'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'flying' && bot == 'gound'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'flying' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'flying' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'flying' && bot == 'rock'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'flying' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'flying' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Psychic Types

// else if(user == 'psychic' && bot == 'normal'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'psychic' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'fighting'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'psychic' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'psychic' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Bug Types

// else if(user == 'bug' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'fire'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'bug' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'grass'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'bug' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'bug' && bot == 'fighting'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'bug' && bot == 'poison'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'bug' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'bug' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Rock Types

// else if(user == 'rock' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'rock' && bot == 'fire'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'rock' && bot == 'water'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'rock' && bot == 'electric'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'rock' && bot == 'grass'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'rock' && bot == 'ice'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'rock' && bot == 'fighting'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'rock' && bot == 'poison'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'rock' && bot == 'gound'){
//   document.querySelector('.loss').style.display = 'none';
// }else if(user == 'rock' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'rock' && bot == 'bug'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'rock' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'rock' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'rock' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Ghost Types

// else if(user == 'ghost' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'ghost' && bot == 'ghost'){
//   document.querySelector('.win').style.display = 'none';
// }else if(user == 'ghost' && bot == 'dragon'){
//   document.querySelector('.draw').style.display = 'none';
// }

// ///Dragon Types

// else if(user == 'dragon' && bot == 'normal'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'fire'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'water'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'electric'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'grass'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'ice'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'fighting'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'poison'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'gound'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'psychic'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'bug'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'rock'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'ghost'){
//   document.querySelector('.draw').style.display = 'none';
// }else if(user == 'dragon' && bot == 'dragon'){
//   document.querySelector('.win').style.display = 'none';
// }