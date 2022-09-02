import React from "react";

export default function MainImage({url}){
   


  return (
    <div>
    { url && url !== '' &&
      <img src={`${url}`} alt='selected' onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src=`${url}`;
      }} />
    }
    </div>
  )
}