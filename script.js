const submit_btn = document.getElementById("submit-input");

submit_btn.addEventListener("click", e => {

    const text_values = document.getElementById("text-input").value;

    if (!text_values){
        return 0;
    }

    else{
        const new_task = document.createElement("div"); 
        new_task.className = "task";

        const new_task_content = document.createElement("div");
        new_task_content.className = "task-content";
        const new_text_content_text = document.createElement("input");
        // new_text_content_text.value = text_values;
        new_text_content_text.setAttribute("value", text_values);
        new_text_content_text.setAttribute("readonly", "readonly");

        new_task_content.appendChild(new_text_content_text);

        const new_task_buttons = document.createElement("div");
        new_task_buttons.className = "buttons";
        const new_task_buttons_edit = document.createElement("button")
        new_task_buttons_edit.textContent = "Edit"
        const new_task_buttons_delete = document.createElement("button")
        new_task_buttons_delete.textContent = "Delete"

        new_task_buttons.appendChild(new_task_buttons_edit)
        new_task_buttons.appendChild(new_task_buttons_delete)

        new_task.appendChild(new_task_content)
        new_task.appendChild(new_task_buttons)

        document.getElementById("tasks").appendChild(new_task)

        document.getElementById("text-input").value = ""

        new_task_buttons_edit.addEventListener("click", e => {
            if (new_task_buttons_edit.textContent == "Edit"){
                new_text_content_text.removeAttribute("readonly");
                new_text_content_text.focus();
                new_task_buttons_edit.textContent = "Save"; 
            } else{
                new_text_content_text.setAttribute("readonly","readonly");
                new_task_buttons_edit.textContent = "Edit";
            }
        })

        new_task_buttons_delete.addEventListener("click", e => {
            document.getElementById("tasks").removeChild(new_task);
        })

    }
    
})