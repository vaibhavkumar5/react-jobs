import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    <>
        <div className={`${props.bg} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <p className="mt-2 mb-4">
              {props.subtitle}
            </p>
            <Link
              to={props.route}
              className={`${props.buttonbg} inline-block text-white rounded-lg px-4 py-2 `}
            >
             {props.button}
            </Link>
          </div>
    </>
  )
}

export default Cards