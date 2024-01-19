
//comeco de jogo
  

alert("para começar clique em jogador")
function jogador1(){

         let jogador1=prompt("X ou O [se quiser sai aperte qualquer tecla menos x ou o]=primeira casa"  )
       if(jogador1=="x"||jogador1=="o"){
        document.getElementById("casa11").innerHTML=`${jogador1}`
       }else{
         console.log("saiu ")
       }
    
    let jogador2=prompt("X ou o [se quiser sai aperte qualquer tecla menos x ou o]=segunda casa=jogador1")
          if(jogador2=="x"||jogador2=="o"){
            document.getElementById("casa21").innerHTML=`${jogador2}`
          }else{
            return false
          }
     
          let jogador3=prompt("X ou o[se quiser sai aperte qualquer tecla menos x ou o]=terceira casa= ")
          if(jogador3=="x"||jogador3=="o"){
            document.getElementById("casa31").innerHTML=`${jogador3}`
          }else{
            return false
          }
          
          let jogador4=prompt("X ou o [se quiser sai aperte qualquer tecla menos x ou o]=qquarta casa=jogador1")
          if(jogador4=="x"||jogador4=="o"){
            document.getElementById("casa41").innerHTML=`${jogador4}`
          }else{
            return false
          }
    
          let jogador5=prompt("X ou o [se quiser sai aperte qualquer tecla menos x ou o]=quinta casa= ")
          if(jogador5=="x"||jogador5=="o"){
            document.getElementById("casa51").innerHTML=`${jogador5}`
          }else{
            return false
          }
    
          let jogador6=prompt("X ou o[se quiser sai aperte qualquer tecla menos x ou o]=sexta casa= ")
          if(jogador6=="x"||jogador6=="o"){
            document.getElementById("casa61").innerHTML=`${jogador6}`
          }else{
            return false
          }
    
          let jogador7=prompt("X ou o[se quiser sai aperte qualquer tecla menos x ou o]=setima casa= ")
          if(jogador7=="x"||jogador7=="o"){
            document.getElementById("casa71").innerHTML=`${jogador7}`
          }else{
            return false
          }
          let jogador8=prompt("X ou o[se quiser sai aperte qualquer tecla menos x ou o]= oitva casa= ")
          if(jogador8=="x"||jogador8=="o"){
            document.getElementById("casa81").innerHTML=`${jogador8}`
          }else{
            return false
          }
          let jogador9=prompt("X ou o[se quiser sai aperte qualquer tecla menos x ou o]=nona casa= ")
          if(jogador9=="x"||jogador9=="o"){
            document.getElementById("casa91").innerHTML=`${jogador9}`
          }else{
            return false
          }
   }
 
 document.addEventListener("click",jogador1)
 