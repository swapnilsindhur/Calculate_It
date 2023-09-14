let string = ""   // to store and display data
let isEqual = false  // to check whether = was pressed previously or not.
let operator_count = 0 // to count continuous operator

let buttons = document.querySelectorAll('button')
let input = document.querySelector('input')


console.log(buttons)
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{

        if(button.className == "green operator"){
            operator_count++;
        }
        else if(button.innerHTML != "=" && operator_count<2){
            operator_count=0;
        }




        if(isEqual==true){       // if = was pressed previously, then clear output to display new input
            string=""
            isEqual = false
        }



        if(button.innerHTML == 'AC'){
            string=""
            isEqual = false
        }
        else if(button.innerHTML == 'DE'){
            if(string=="NA"){
                string=""
            }
            else{
                string = string.slice(0, string.length - 1);
            }
        }
        else if(button.innerHTML == '='){
            isEqual=true

            if(operator_count==0)   // checks invalid data
                string=eval(string)
            else   {
                string="NA"
                operator_count=0;
            } 
                
        }
        else{
            string += button.innerHTML
        }
        input.value = string

    })
})
