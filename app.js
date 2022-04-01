const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let tareas = {
    1648835799552: {
    id: 1648835799552,
    texto: 'Tarea #1',
    estado: false
  }, 
    1648835996862: {
    id: 1648835996862,
    texto: 'Tarea #2',
    estado: false    
  }
}


// console.log(Date.now())

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)

    setTarea(e)
})

const setTarea = e => {
    if(input.value.trim() === '') {
        console.log('esta vacio')
        return
    }
    
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    console.log(tarea)

    formulario.reset()
    input.focus()
}