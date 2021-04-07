let bar = document.getElementsByClassName('fa-bars')[0]
let dropDown = document.getElementsByClassName('menu-small__dropdown')[0]



bar.addEventListener('click', () => {
    displayDropDown()
})


function displayDropDown() {
    if(dropDown.style.display === 'block'){
        dropDown.style.display = 'none'
    } else {
        dropDown.style.display = 'block'
    }
}