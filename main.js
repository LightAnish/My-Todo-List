const item = document.querySelector("#item");
const Todobox = document.querySelector("#todobox")

item.addEventListener( 
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addtodo(this.value)
            this.value = ""
        }
    }
)
const addtodo =(data)=>{
   const listitem =  document.createElement("li");
   listitem.innerHTML = `
   ${data}
    <i class="fa-sharp fa-solid fa-xmark"></i>
    ` ;
    listitem.addEventListener (
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    Todobox.appendChild(listitem)
}