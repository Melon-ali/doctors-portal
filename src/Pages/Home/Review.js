import React from 'react'

function Review({review}) {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
            <p>Why manually contact patients when you may just be ignored? Medical and dental appointment reminder text messages cut down on phone time and lower your.</p>
            <div className="flex items-center">
              <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                    <img src={review.img} alt=""/>
                  </div>
              </div>
              <div>
                <h4 className='text-xl'>{review.name}</h4>
                <p>{review.location}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Review;