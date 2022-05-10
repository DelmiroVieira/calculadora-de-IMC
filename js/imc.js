function calcular(){

    var Nval = document.getElementById('val')
    var Vpe= document.getElementById('vpe')
    var altura= Number(val.value)
    var peso = Number(vpe.value)
    var imc = 0
    imc= (peso/(altura* altura)).toFixed(2)

      
    
        if(imc < 17 ){

            resposta.innerHTML = `<p>O seu IMC é de   ${imc}, <b>Você está muito abaixo do peso.</b><p>

                        "você está em nível crítico de magresa, proucure um nutricionista"
            `
            

        }else if(imc == 17 || imc <= 18.5){


            resposta.innerHTML = `<p> O seu IMC é de  ${imc},<b> você está abaixo do peso</b>  </p>
            
                "O seu caso não é crítico mas para ficar bem melhor, melhore a sua alimentação durma melhor
                  e faça atividades físicas"
            
            `

        }else if(imc == 18.5 || imc <=25){

            resposta.innerHTML = `<p>O seu IMC é de  ${imc}, <b> peso ideal</b> </p>

                "Parabéns você está no seu peso ideal continue assim"
            
            `
        }else if(imc == 25 || imc <= 30){
            resposta.innerHTML = `<p>O seu IMC é de  ${imc},<b> você está com sobrepeso</b></p>
            
            "Você está acima do peso, coma alimentos mais saudáveis e faça exercícios físicos"
            
            `
        }else if(imc == 30 || imc <= 35){
            resposta.innerHTML = `<p>O seu IMC é de  ${imc}, <b> você está com obesidade</b> </p>

               "Você está  muito acima do peso, proucure um nutricionista"
            
            `
        }else if(imc == 35 || imc <= 40 ){
            resposta.innerHTML = `<p>O seu IMC é de  ${imc},<b> você está com obesidade severa</b>  </p>

            "Você está  muito acima do peso o seu nivel de obesidade está afetando a sua saúde,
             proucure urgentemente um nutricionista"       
            
            `
        }else if(imc > 40){
            resposta.innerHTML = `<p>O seu IMC é de  ${imc},<b>  você está com obesidade morbida</b>  </p>
            
            "Você está  muito acima do peso o seu nivel de obesidade pode matar você..." 
            
            `
        }else{
            resposta.innerHTML = `Digite um numero`
        }



    



    

    
    

}

