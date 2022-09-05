import React from "react";

export default function MainImage({url}){

  return (
    <div>
    { url &&
      <img src={`${url}`} alt='selected' onError={e => { e.currentTarget.src = "https://www.wpbeginner.com/wp-content/uploads/2017/08/defaultthumbnail.png"; }} />      
    }
    </div>
  )
}