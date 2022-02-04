import React from 'react'
import PerspectiveTile from '../components/PerspectiveTile'

interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  const cardInfo = (
    <div className="flex items-center justify-center my-10">
      <div className="flex h-[50px] w-[50px] items-center justify-center bg-indigo-500 text-center">
        hi
      </div>
    </div>
  )

  return (
    <div>
      <PerspectiveTile Content={cardInfo}></PerspectiveTile>
    </div>
  )
}

export default Home
