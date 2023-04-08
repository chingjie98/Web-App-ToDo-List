
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

        var proc = "<li id= lists-item-" + counter.toString() + ">" + inputValue.value + "<span>delete</span><span>edit</span>" + "</li>";
        document.getElementsByTagName("ul")[0].children[counter].innerHTML = proc;

        document.getElementById("text_values").value = "";
    }
    
}

var ul = document.getElementsByTagName("ul")[0];

ul.addEventListener("click", e => {
    if (e.target.tagName == "SPAN"){
        const span = e.target;
        const li = e.target.parentNode;
        const ul = li.parentNode;
        const ull = ul.parentNode;

        if (e.target.textContent == "delete"){
            ull.removeChild(ul);
            counter -= 1;
        }
    }    
    
});


document.addEventListener("click", e => {
    console.log(e.target.parentNode);
})



