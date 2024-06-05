const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('auto', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

