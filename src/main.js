import './style.css'

const player={
  name:'Goku',
  level:1,
  xp:0,
  xpToNextLevel:100
}
const addXP= (amount)=>{
  player.xp += amount

  while(player.xp >= player.xpToNextLevel){
    player.xp -= player.xpToNextLevel;
    player.level++;
    player.xpToNextLevel= Math.floor(player.xpToNextLevel*1.5)
    console.log(`Level up you're now level ${player.level}`)
  }
  updateUI()
}
const updateUI=()=>{
  document.querySelector('#level').textContent=
  `Level ${player.level}`

  document.querySelector('#xp').textContent=
  `${player.xp}/${player.xpToNextLevel}`

  const progress= (player.xp/player.xpToNextLevel)*100;

  document.querySelector('.xp-progress').style.width=
  `${progress}%`
}

document.querySelector("#app").innerHTML=`
 <main class="app">
<header class="header">
<h1>Fitness RPG </h1>
<p> Turn your workouts into xp. </p>
</header>

<section class="player-card">
  <h2 id="name"> ${player.name} </h2>
  <p id="level">Level ${player.level} </p>
  <div class="xp-bar">
    <div class="xp-progress"></div>
  </div>
  <p id="xp">0/100xp </p>
</section>

<section class="stats">
<div class="stat">
<span>💪</span>
<strong>STR</strong>
<p>10</p>
</div>

<div class="stat">
<span>❤️</span>
<strong>VIT</strong>
<p>10</p>
</div>

<div class="stat">
<span>⚡</span>
<strong>AGI</strong>
<p>10</p>
</div>

<section class="quests">
<h2>📝 Daily Quests </h2>
 <div class="quest">
 <span>50 Push-ups </span>
 <strong>+50xp</strong>
 <button id="pushUpQuest">Complete </button>
 </div>

 <div class="quest">
 <span>30 min running </span>
 <strong>+75xp</strong>
 </div>

</section>
</section>
</main>
`

document.querySelector('#pushUpQuest').addEventListener('click', () => {
  addXP(50)
})