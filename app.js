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

document.addEventListener('DOMContentLoaded', e => {
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

// console.log(Date.now())

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)

    setTarea(e)
})

const setTarea = e => {
    if(input.value.trim() === '') {
        // console.log('esta vacio')
        return
    }
    
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id] = {...tarea}

    formulario.reset()
    input.focus()

    pintarTareas()
}

const pintarTareas = () => {
    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
    console.log(e.target.classList.contains('fa-circle-check'))
    if(e.target.classList.contains('fa-circle-check')) {

    }
    e.stopPropagation()
}