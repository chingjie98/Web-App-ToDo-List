
var submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", func);

var counter = 0;


function func(){

    let newElement = document.createElement("li");

    inputValue = document.getElementById("text_values") 

    if (inputValue.value == null || inputValue.value == ''){
        return 0;
    }

    else{

        counter += 1;

        document.getElementById("lists").appendChild(newElement);

        var proc = "<li>" + inputValue.value + "<span>delete</span><span>edit</span>" + "</li>";
        document.getElementById("lists").children[counter].innerHTML = proc;

        document.getElementById("text_values").value = "";


    }
    

}



