function creatGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="">
    </li>

    `
}

function creatCard(date, day, games){
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
    <img src="assets/logo.svg" alt="">
    </header>
<main id="cards">
 ${creatCard('24/11', 'quinta', 
   creatGame('suica', '07:00', 'camarao') + 
   creatGame('brazil', '16:00', 'serbia')
   )}
 ${creatCard('28/11', 'segunda', 
   creatGame('camarao', '07:00', 'serbia') + 
   creatGame('brazil', '13:00', 'suica')
   )}
 ${creatCard('02/11', 'sexta', 
   creatGame('camarao', '16:00', 'brazil') + 
   creatGame('serbia', '16:00', 'suica')
   )}
</main>
`