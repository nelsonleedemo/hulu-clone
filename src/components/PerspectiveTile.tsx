import React, { ReactElement } from 'react'

interface PerspectiveTileProps {
  Content: ReactElement
  //   content: (string | React.FC)
}

const PerspectiveTile: React.FC<PerspectiveTileProps> = ({ Content }) => {
  return <div>{Content}</div>
}

export default PerspectiveTile
