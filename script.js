window.addEventListener('load', () => {
  const form = document.querySelector("#newTask");
  const input = document.querySelector(".taskinput");
  const list_el = document.querySelector("#tasks");


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill the task!!!");
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const content_el = document.createElement("div");
    content_el.classList.add("content");


    task_el.appendChild(content_el);

    const task_input = document.createElement("input");

    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");
    content_el.appendChild(task_input);


    const action1 = document.createElement("div");
    action1.classList.add("actions")


    list_el.appendChild(action1);

    
    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.setAttribute("id", "ed");
    edit.innerHTML = "Edit";
   

const del = document.createElement("button");
    del.classList.add("edit");
    del.setAttribute("id", "del");
    del.innerHTML = "Delete";

     action1.appendChild(edit);
    action1.appendChild(del);



task_el.appendChild(action1);
    list_el.appendChild(task_el);
   


    edit.addEventListener('click', () => {
      if (edit.innerText.toLowerCase() == "edit") {
        task_input.removeAttribute("readonly");
        task_input.focus();
        edit.innerText = "Save";
      }
      else {
        task_input.setAttribute("readonly", "readonly");
        edit.innerText = "Edit";
      }
    })


    del.addEventListener('click', () => {
      list_el.removeChild(task_el);
    })

  })



})