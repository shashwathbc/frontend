import React from 'react';
import "./tabs.css";

function Tabs({tabNames}) {
    console.log(tabNames)
  return (
    <div className="tabs">
        {
            tabNames.map((name , index) => (
                <div className="tab"  key={index}>
                    <a href="">{name}</a>
                </div>
            ))
        }
            {/* <div className="tab">
              <a href="">Home</a>
            </div>
            <div className="tab">
              <a href="">About</a>
            </div>
            <div className="tab">
              <a href="">Features</a>
            </div> */}
          </div>
  )
}

export default Tabs