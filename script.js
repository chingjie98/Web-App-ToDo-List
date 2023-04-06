
var submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", func);

function func(){

    let newElement = document.createElement("li");

    inputValue = document.getElementById("text_values") 

    if (inputValue.value == null || inputValue.value == ''){
        return 0;
    }

    else{
        newElement.innerText = inputValue.value;
        document.getElementById("lists").appendChild(newElement);
        document.getElementById("text_values").value = "";
    }
    

}