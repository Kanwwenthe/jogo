
//comeco de jogo
  

 
function jogador1(){
         let jogador1=prompt("X ou O primeira casa"  )
       if(jogador1=="x"||jogador1=="X"||jogador1=="o"||jogador1=="O"){
        document.getElementById("casa11").innerHTML=`${jogador1}`
       }else{
        throw'Erro jogo parado '
       }
    
    let jogador2=prompt("X ou o segunda casa ")
          if(jogador2=="x"||jogador2=="o"){
            document.getElementById("casa21").innerHTML=`${jogador2}`
          }else{
            throw'Erro  '
          }
     
          let jogador3=prompt("X ou o terceira casa")
          if(jogador3=="x"||jogador3=="o"){
            document.getElementById("casa31").innerHTML=`${jogador3}`
          }else{
            throw'Erro  '
          }
          
          let jogador4=prompt("X ou o terceira casa=jogador1")
          if(jogador4=="x"||jogador4=="o"){
            document.getElementById("casa41").innerHTML=`${jogador4}`
          }else{
            throw'Erro  '
          }
    
          let jogador5=prompt("X ou o  quinta casa= ")
          if(jogador5=="x"||jogador5=="o"){
            document.getElementById("casa51").innerHTML=`${jogador5}`
          }else{
            throw'Erro  '
          }
    
          let jogador6=prompt("X ou O sexta casa= ")
          if(jogador6=="x"||jogador6=="o"){
            document.getElementById("casa61").innerHTML=`${jogador6}`
          }else{
            throw'Erro  '
          }
    
          let jogador7=prompt("X ou O setima casa= ")
          if(jogador7=="x"||jogador7=="o"){
            document.getElementById("casa71").innerHTML=`${jogador7}`
          }else{
            throw'Erro  '
          }
          let jogador8=prompt("X ou O oitva casa ")
          if(jogador8=="x"||jogador8=="o"){
            document.getElementById("casa81").innerHTML=`${jogador8}`
          }else{
            throw'Erro  '
          }
          let jogador9=prompt("X ou o nona casa")
          if(jogador9=="x"||jogador9=="o"){
            document.getElementById("casa91").innerHTML=`${jogador9}`
          }else{
               throw'Erro  '
          }
          }
   
 
 document.addEventListener("click",jogador1)
 