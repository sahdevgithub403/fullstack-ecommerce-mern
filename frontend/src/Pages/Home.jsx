import { Hero } from '../components/Layout/Hero'
import { GenderCollection } from '../components/Products/GenderCollection'
import { NewArrival } from '../components/Products/NewArrival'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrival/>
    </div>
  )
}
