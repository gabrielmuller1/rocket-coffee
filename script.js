const menuToggle = document.getElementById('menuToggle')
const menu = document.getElementById('menu')
const itens = document.querySelectorAll('.list-item')
let showMenu = false


window.addEventListener('resize', () => {
    if(window.screen.width > 700) {
        for (let i = 0; i < itens.length; i++){
            itens[i].style = "border-left: none; color:var(--text-color)"
            itens[i].children[0].style = "margin-left: 0; font-weight: 400;"
        }
    }
})

if(window.screen.width <= 700){
    itens[0].style = "border-left: 5px solid var(--button)";
    itens[0].children[0].style = "margin-left: -5px; font-weight: 700;"
}

menuToggle.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('on')
    showMenu = !showMenu

    if(showMenu){
        document.body.style.overflow = "hidden"
        menuToggle.src = "assets/menu-buguer-close.svg"

        item1.addEventListener('click', chooseItem)
        item2.addEventListener('click', chooseItem)
        item3.addEventListener('click', chooseItem)
        item4.addEventListener('click', chooseItem)
        item5.addEventListener('click', chooseItem)

        document.body.addEventListener('click', event => {
            if(event.target.id === 'logo' || event.target.className === 'item'){
                menu.classList.remove('on')
                showMenu = !showMenu
                document.body.style.overflow = "initial"
                menuToggle.src = "assets/menu-buguer-open.svg"
            }
        })

    } else {
        document.body.style.overflow = "initial"
        menuToggle.src = "assets/menu-buguer-open.svg"
    }

}

function chooseItem(event){
    for (let i = 0; i < itens.length; i++){
        itens[i].style = "border-left: none; color:var(--text-color)"
        itens[i].children[0].style = "margin-left: 0; font-weight: 400;"
    }

    if(window.screen.width <= 700){
        if (event.target.id === 'item1') {
            itens[0].style = "border-left: 5px solid var(--button)";
            itens[0].children[0].style = "margin-left: -5px; font-weight: 700;"
        }
    
        else if (event.target.id === 'item2'){
            itens[1].style = "border-left: 5px solid var(--button)";
            itens[1].children[0].style = "margin-left: -5px; font-weight: 700;"
        }
    
        else if (event.target.id === 'item3'){
            itens[2].style = "border-left: 5px solid var(--button)";
            itens[2].children[0].style = "margin-left: -5px; font-weight: 700;"
        }
    
        else if (event.target.id === 'item4'){
            itens[3].style = "border-left: 5px solid var(--button)";
            itens[3].children[0].style = "margin-left: -5px; font-weight: 700;"
        }
    
        else if (event.target.id === 'item5'){
            itens[4].style = "border-left: 5px solid var(--button)";
            itens[4].children[0].style = "margin-left: -5px; font-weight: 700;"
        }
    }
}

