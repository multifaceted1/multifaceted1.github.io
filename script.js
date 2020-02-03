// const stateDivs = document.querySelector("#invisibleStateDivs")
// var t = document.querySelector(option.value)
// const 
// const stateSelectButton = document.querySelector("#stateButton")
//  stateSelectButton.addEventListener("click"&& "select", document(id=t) id=T style.display: block;)

const stateDropdown = document.querySelector("#state-dropdown")
const stateButton = document.querySelector("#stateButton")

const treeDropdown = document.querySelector("#tree-dropdown")
const treeButton = document.querySelector("#treeButton")

stateButton.addEventListener("click", function(){
    const state = stateDropdown.value
    const stateDiv = document.querySelector(`#${state}`)
    stateDiv.classList.toggle("invisible")
})



treeButton.addEventListener("click", function(){
    const tree = treeDropdown.value
    const treeDiv = document.querySelector(`#${tree}`)
    treeDiv.classList.toggle("invisible")
})