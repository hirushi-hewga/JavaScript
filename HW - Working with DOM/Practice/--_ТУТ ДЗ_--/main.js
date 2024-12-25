const addFish_btn = document.getElementById('addFish-btn')
const addEgg_btn = document.getElementById('addEgg-btn')
const addApple_btn = document.getElementById('addApple-btn')

const list1 = document.getElementById('list1')
const list2 = document.getElementById('list2')

addFish_btn.onclick = () => {
    list1.innerHTML += `<li><a href="../fish/index.html">
    <img src="../icons_hw_module_3/Food_C205-128.png" alt="">
    <br>Fish</a></li>`
}

addEgg_btn.onclick = () => {
    list1.innerHTML += `<li><a href="../eggs/index.html">
    <img src="../icons_hw_module_3/Food_C203-128.png" alt="">
    <br>Eggs</a></li>`
}

addApple_btn.onclick = () => {
    list2.innerHTML += `<li><a href="../apple/index.html">
    <img src="../icons_hw_module_3/Food_C240-128.png" alt="">
    <br>Apple</a></li>`
}