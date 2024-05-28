/** @type {HTMLCanvasElement} */
const observa = new IntersectionObserver((objeto)=>{
    objeto.forEach((objeto)=>{
        if(objeto.isIntersecting){
            objeto.target.classList.add('mostra')
        }
        else{
            objeto.target.classList.remove('mostra')
        }
    })
})

const elementosEscondidos = document.querySelectorAll(".escondido")
elementosEscondidos.forEach((obj)=> observa.observe(obj))