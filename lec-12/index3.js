// how to insert new element in dom
// 1.create a new elemnt ---> create element
//add requiredd data in that element using innertext or innerHtml
// add that in parent container using appendChild or append




 let todo = {
    id :3435435,
    title:"Todo4"
 }

 let ul = document.getElementById("todoList");
 function addTodo (){
    let listEl = document.createElement("li");
    listEl.innerHTML = `<div>
                <input type = "checkbox" name = "" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class = "checkes" id="check">check</button>
                    <button class = "crosses" id="cross">cross</button>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Facere eaque voluptatibus a officiis veritatis dolor natus 
                        dignissimos aperiam. Quod porro consequuntur, 
                        quasi pariatur nobis eos odit iure illo minima dolorem.</p>

                </div>
            </div>`
            ul.appendChild(li);
 }

 addTodo();