import React from 'react'
import Card from './Card';
import Information from './Information';
import HeaderHome from './HeaderHome';

const Content = () => {
  return (
    <div className="h-[86%] w-[80%] absolute right-0 top-24">
      <HeaderHome/>
      <Card/>
      <Information/>
    </div>
  )
}

export default Content;