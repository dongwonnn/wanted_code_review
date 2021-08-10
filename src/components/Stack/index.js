import React from 'react'
import { css } from 'emotion'

function Stack({ children, gaps, direction = 'vertical' }) {
  const dir = direction === 'vertical' ? 'top' : 'left'
  // dir : top
  // gap : [0, 20, 20, 40]
  const style = css`
    ${gaps.map(
      (gap, index) => `& > *:nth-child(${index + 1}) { 
        margin-${dir}: ${gap}px 
      }`
    )}
  `

  return <div className={style}>{children}</div>
}

export default Stack
