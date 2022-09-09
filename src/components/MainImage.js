import React, { useEffect } from "react";

export default function MainImage({url}){
  const [top, setTop] = React.useState(0)
  const [left, setLeft] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [width, setWidth] = React.useState(0)
  const USER_ID = 'uf7j45rieu5q';
  const PAT = 'c02ec4eb8d294216999acb9315d0391f';
  const APP_ID = '7b8bb90de7364bdd9a460255cd492024';
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';    
  const IMAGE_URL = `${url}`;
  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});
const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};
  useEffect( () => {
    const fetchData = async () =>{
    const data = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    const json = await data.json()
    setTop(json.outputs[0].data.regions[0].region_info.bounding_box.top_row)
    console.log(top)
    setLeft(json.outputs[0].data.regions[0].region_info.bounding_box.left_col)
    setHeight(json.outputs[0].data.regions[0].region_info.bounding_box.bottom_row -  json.outputs[0].data.regions[0].region_info.bounding_box.top_row)
    setWidth(json.outputs[0].data.regions[0].region_info.bounding_box.right_col - json.outputs[0].data.regions[0].region_info.bounding_box.left_col)
    return json
    }
    fetchData()
  })



          

      
        
    

  return (
    <div  >
    { url &&
    <div style={{
      position:'relative'
    }}>
      <img src={`${url}`} alt='selected' onError={e => { e.currentTarget.src = "https://www.wpbeginner.com/wp-content/uploads/2017/08/defaultthumbnail.png"; }}
      style={{
        
        width:'100%',
        height:'100%'
      }}/> 
      <div className='green-box' style={{
        position:'absolute',
        top:`${top*100}%`,
        left:`${left*100}%`,
        height:`${height*100}%`,
        width:`${width*100}%`,
        border: 'green 3px solid',
        backgroundColor:'rgba(21,239,58,0.2)'
      }}></div> 
   
      </div>
    }
    </div>
  )
}