const boton = document.querySelector("#boton")

boton.addEventListener("click", () =>{
    alert("Click en el botón")
})

$(()=> {
    $("#boton").click(()=>{
        console.log("Hola, estoy usando JQuery")
    })
})