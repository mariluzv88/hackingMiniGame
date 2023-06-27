
   gameBoard.addEventListener('dragover', dragGame);
   gameBoard.addEventListener("dragenter", e => e.preventDefault());







gameBoard.forEach(gameBoard => {
    gameBoard.addEventListener('dragover', drop =>{
        drop.preventDefault()
        const afterDrag = dragReplace(gameBoard,drop.clientY)
        const dragged = document.querySelector('.dragged')
        gameBoard.appendChild(dragged)
       
    })
   
})
const dragReplace = (gameBoard,y) => {
const dragTiles = [...gameBoard.querySelectorAll('.draggable:not(.dragged)')]

return dragTiles.reduce((near, child) => {
const box = child.getBoundingClientRect()
console.log(box)
const offset = y - box.top - box.height / 2
if (offset < 0 && offset > near.offset) {
  return { offset: offset, element: child }
} else {
  return near
}
}, { offset: Number.NEGATIVE_INFINITY }).element
}

