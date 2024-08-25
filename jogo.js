
//comeco de jogo
  

 

      
      let jogadas=0
      let NumerosCasas
       NumerosCasas++
       NumerosCasas=+jogadas
      
       //PRIMEIRA CASA
   function casa1(){   
      
        
       if(NumerosCasas==1&&NumerosCasas++){
        document.getElementById("casa11").innerHTML=`x`
        console.log(NumerosCasas)
       }else{
            document.getElementById("casa11").innerHTML="o"
      }}
   
   function casa2(){
       if(NumerosCasas==2&&NumerosCasas++){
       document.getElementById("casa21").innerHTML="x"
       }else{  
            document.getElementById("casa21").innerHTML=`o`
        console.log(NumerosCasas)
            
       } 
      }
      function casa3(){
           
       if(NumerosCasas==3&&NumerosCasas++){
             document.getElementById("casa31").innerHTML="o"  
           console.log(NumerosCasas)
       }else{
            document.getElementById("casa31").innerHTML="x"
            console.log(NumerosCasas)
       }  if(typeof NumerosCasas!="undefined"){
            console.log(typeof NumerosCasas)
       }
      }     
  document.addEventListener("click",casa3())
 document.addEventListener("click",casa2())  
 document.addEventListener("click",casa1())
 // SEGUNDA CASA

 function SegundaCasa(){ 
   
      if( NumerosCasas==4&&NumerosCasas++){
            document.getElementById("casa41").innerHTML="x"
            console.log(NumerosCasas)
            
   
      }else{
             document.getElementById("casa41").innerHTML="o"
             console.log(NumerosCasas)
              
      }
 }
 function Terceira(){
     if(NumerosCasas==5&&NumerosCasas++){
      document.getElementById("casa51").innerHTML="x"
      console.log(NumerosCasas)
     }else{
      document.getElementById("casa51").innerHTML="o"
      console.log(NumerosCasas)
     }
 }
 function Quartar(){
      if(NumerosCasas==6&&NumerosCasas++){
            document.getElementById("casa61").innerHTML="x"
      }else{
            document.getElementById("casa61").innerHTML="o"
      }
 }
 document.addEventListener("click",Quartar())
 document.addEventListener("click",Terceira())
 document.addEventListener("click",SegundaCasa())
 //ultima casa

 function  Ultimacasa(){
      if(NumerosCasas==7&&NumerosCasas++){
            document.getElementById("casa71").innerHTML="x"
            console.log(NumerosCasas)
      }else{
            document.getElementById("casa71").innerHTML="o"
            console.log(NumerosCasas)
      }
 }
 function SegundaUltimaCasa(){
      if(NumerosCasas==8&&NumerosCasas++){
            document.getElementById("casa81").innerHTML="x"
      }else{
            document.getElementById("casa81").innerHTML="o"
      }
 }
 function TerceiraUltimaCasa(){
      if(NumerosCasas==9&&NumerosCasas++){
            document.getElementById("casa91").innerHTML="x"
      }else{
            document.getElementById("casa91").innerHTML="o"
      }
 }
 document.addEventListener("click",Ultimacasa())
 document.addEventListener("click",SegundaUltimaCasa())
 document.addEventListener("click",TerceiraUltimaCasa())