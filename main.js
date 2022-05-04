window.onload= function () {

    const myForm=document.querySelector("#form");
    const taskList=document.getElementById("taskContainer");


    myForm.onsubmit=function(event){
        event.preventDefault();
        const input =document.querySelector("#form>input:first-child");

        const {value}=input;


        if(value!=""){
            console.log("Process works.")
            const li =document.getElementById("box")

            const delt=document.createElement("button");
            delt.innerHTML='🗑'
    
            delt.onclick=function(event){
                const {target}=event;
                const{parentElement}=target;
    
                parentElement.parentElement.removeChild(parentElement);
            };
            
            li.innerHTML=value;

            li.appendChild(delt);
            
    
            input.value="";
    
            taskList.appendChild(li);
            
        }else{
            console.log("Does not work!")
        }
    };
}

