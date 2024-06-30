import Bgimage from './assets/backgroundimg.avif'
import Card from './Card'


function App() {
  let data = [
    {
    title:"ICC Final World Cup",
    image:"https://www.livemint.com/lm-img/img/2024/06/29/600x338/T20-Cricket-WCup-India-South-Africa-170_1719684447334_1719684486636.jpg",
    description:"After almost four weeks of power-packed action, drama and plenty of twists, the ICC T20 World Cup 2024 ends with India crowned world champions. After reaching the precipice on so many occasions in the last few years, the men in blue finally got the monkey of their back in a thrilling match against first-time finalists South Africa."
  },
  {
    title:"Magnificent NASA images from light-years away",
    image:"https://www.livemint.com/lm-img/img/2024/06/30/600x338/Screenshot_2024-06-30_140721_1719736649898_1719737234580.png",
    description:"The universe is a mystery, and space agencies like the National Aeronautics and Space Administration (NASA) help us understand it better. The US space agency constantly shares images and videos from space to bring common people closer to celestial objects and other bodies. "
  },
  {
    title:"Buy or sell stocks",
    image:"https://www.livemint.com/lm-img/img/2024/06/30/600x338/gan_1719740967859_1719740968020.jpg",
    description:"The Nifty index concluded the trading week at 24,000, demonstrating consolidation near the critical 24,000 level, which has been a focal point in recent analyses. Throughout the week, the index fluctuated within a range, reaching a high of approximately 24,200. "
  },
  {
    title:"Reliance Jio launches new tariff plans",
    image:"https://www.livemint.com/lm-img/img/2024/06/26/600x338/ANI-20240530260-0_1719412821632_1719412837385.jpg",
    description:"Reliance Jio's decision to hike existing tariff rates didn't go down well with netizens, with many feeling 'disappointed' over the 'unaffordable' new tariff plan. However, the company said that the new plans will be available from July 3, and it will continue to provide the 'best plans and best experience' to its users."
  }
]
  return <>
<div className="container">


<h1 className="my-4">Today's News
  
</h1>
<div className="row">

{
  data.map((e,i)=>{
    return <Card data={e} key={i}/>
  })
}


</div>
</div>
  </>
}

export default App
