let game_img = document.querySelector(".game_img")
let game_winner_img = document.querySelector(".game_winner_img")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let player_two_err = document.querySelector(".player_two_err")
let start_btn = document.querySelector(".start_btn")
let guess_btn = document.querySelector(".guess_btn")
let again_btn = document.querySelector(".again_btn")
let chance_main = document.querySelector(".chance_main")
let player = document.querySelector(".player")
let chance = document.querySelector(".chance")


let storeNumber = ""
let chanceRemain = 5
let regex = 'NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)'

start_btn.addEventListener("click",function(){
     if(!input1.value == ""){
          if (!input1.value.match(regex)){
               if(input1.value>=0 && input1.value<=10){
                    player_two_err.innerHTML = " "
                    player.innerHTML = "second player"
                    input1.style.display = "none"
                    input2.style.display = "block"
                    start_btn.style.display = "none"
                    guess_btn.style.display = "block"
                    chance_main.style.display = "block"
                    storeNumber = input1.value


               }else{
                    player_two_err.innerHTML = "please enter your number between 0 to 10"
               }
          }else{
               player_two_err.innerHTML = "please enter your number"
          }
     }else{
          player_two_err.innerHTML = "please enter number"
     }
})

guess_btn.addEventListener('click',function(){
     if(!input2.value == ""){
         if(!input2.value.match(regex) ){
             if(input2.value>=0 && input2.value<=10){
                 if(chanceRemain !== 1){
                     chanceRemain --
                     if(input2.value.match(storeNumber)){
                         player_two_err.innerHTML = ""
                         game_img.style.display = "none"
                         game_winner_img.style.display = "block"
                         player.innerHTML = "Congratulation's!! You are Winner"
                         chance_main.style.display = "none"
                         input2.style.display = "none"
                         guess_btn.style.display = "none"
                         again_btn.style.display = "block"
                     }else{
                         player_two_err.innerHTML = '*Wrong Number Please try again'
                         chance.innerHTML = chanceRemain
                     }
                 }else{
                    player_two_err.innerHTML = ""
                    game_img.style.display = "none"
                    game_winner_img.style.display = "block"
                     player.innerHTML = 'First Player is Winner'
                     chance_main.style.display = 'none'
                     input2.style.display = 'none'
                     guess_btn.style.display = 'none'
                     again_btn.style.display = 'block'
                 }
             }else{
               player_two_err.innerHTML = '*please enter number between 0 to 10'
             }
         }else{
          player_two_err.innerHTML = '*please enter number'
         }
     }else{
          player_two_err.innerHTML = "*please enter number & don't use text"
     }
 })
 again_btn.addEventListener('click',function(){
     location.reload()
 })