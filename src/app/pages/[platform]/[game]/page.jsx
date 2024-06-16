'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const Game = () => {
  const { platform, game } = useParams()
  console.log('plat', platform)
  return <div>{`Game ${game} for ${platform}`}</div>
}

export default Game
