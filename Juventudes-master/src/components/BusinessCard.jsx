import React, {useEffect, useState} from 'react'
import BusinessArray from './BusinessArray';

const BusinessCard = () => {
  return (
    <div className="">
        {BusinessArray.map((BusinessArray) =>
        <div key={BusinessArray.id} className="col-span-1 ">
            <div>
                <img src={BusinessArray.Image} className="h-8 w-8 bg-yellow-300"/>
            </div>
            <div className="">
                <h1>{BusinessArray.title}</h1>
                <h1>{BusinessArray.description}</h1>
            </div>
        </div>
      )}
        </div>
  )
}

export default BusinessCard;