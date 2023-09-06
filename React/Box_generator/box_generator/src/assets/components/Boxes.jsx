import React from 'react'
import './Thebox.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Boxes = (props) => {
    const { boxes } = props
  
    return (
      <div className="boxes-container">
        <p>{JSON.stringify(boxes)}</p>
        {boxes.map((box,id) => (
          <div key={id} className="box">
            <div className={`boxes bg-${box.color}`}>{box.color}</div>
          </div>
        ))}
      </div>
    )
  }
export default Boxes