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
    title:"ICC Final World Cup",
    image:"https://www.livemint.com/lm-img/img/2024/06/29/600x338/T20-Cricket-WCup-India-South-Africa-170_1719684447334_1719684486636.jpg",
    description:"After almost four weeks of power-packed action, drama and plenty of twists, the ICC T20 World Cup 2024 ends with India crowned world champions. After reaching the precipice on so many occasions in the last few years, the men in blue finally got the monkey of their back in a thrilling match against first-time finalists South Africa."
  }
]
  return <>
<div className="container">


<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
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
