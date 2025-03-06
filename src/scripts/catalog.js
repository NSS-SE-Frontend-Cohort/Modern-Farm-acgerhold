export const Catalog = (harvestArray) => {
    const foodContainer = document.querySelector('.container')
    let html = ''

    for (const food of harvestArray) {
        html +=`<section class="plant">${food.type}</section>`
    }

    foodContainer.innerHTML = html

}