import Link from 'next/link'
import React from 'react'

const F4 = () => {
  return (
    <div>F1
        <div>
            <Link href={"/f1/f3"}>F3</Link>
            <Link href={"/about"}>about</Link>
        </div>
    </div>
  )
}

export default F4