
var submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", func);

var counter = -1;

function func(){

    let newElement = document.createElement("li");

    inputValue = document.getElementById("text_values") 

    if (inputValue.value == null || inputValue.value == ''){
        return 0;
    }

    else{

        counter += 1;

        document.getElementsByTagName("ul")[0].appendChild(newElement);

        var proc = inputValue.value + "<span>delete</span><span>edit</span>";
        document.getElementsByTagName("ul")[0].children[counter].innerHTML = proc;

        document.getElementById("text_values").value = "";
    }
    
}

var ul = document.getElementsByTagName("ul")[0];

ul.addEventListener("click", e => {
    if (e.target.tagName == "SPAN"){
        const span = e.target;                      // <span>edit</span>
        const li = e.target.parentNode;             // <li id = list-item-> ... </li>
        const ul = li.parentNode;                   // <ul> ... </ul>

        if (e.target.textContent == "delete"){
            ul.removeChild(li);
            counter -= 1;
        }

        else if (e.target.textContent == "edit"){
            const input = document.createElement("input");
            input.type = "text";
            input.value = li.childNodes[0].nodeValue
            ul.insertBefore(input, li); 
            ul.removeChild(li);
        }
    }
    
    console.log(e);
    
});




