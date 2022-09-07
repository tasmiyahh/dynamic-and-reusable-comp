import React from 'react';
import ReactDOM from 'react-dom'
 import busImage from "./img/bus.jpg"
import carImage from "./img/car.jpg"
 import bikeImage from "./img/bike.jpg"


//es5
// function Hi(props){
//   return <div>
//     helloworld {props.name} {props.color} {props.width}
//   </div>
// }

//es6 
// function Hi({name , color , width }){
//  return  <div>
//   hello world {name} {color} {width}
//  </div>;
// }

//es6 function
const Hi = ({ name, color, width }) => {
  return <div>
    helloworld {name} {color} {width}
  </div>
}

ReactDOM.render(<Hi
  name={"tasmiyah"}
  color={"red"}
  green={true}
  width={64}
  options={{ awesome: "yes", disabled: "nno" }}

/>, document.querySelector("#root"))


//component2
const MediaCard = ({ title, body, imageURL }) => {
  return <div>

    <h1>
      {title}
    </h1>

    <p>
      {body}
    </p>

    <img src={imageURL} alt="" />

  </div>
}

//method 2 of reusable component
//const Mediapage = () => {

//   <div>
//   <MediaCard
//       title="bus"
//       body="this is a bus"
//        imageURL={busImage}
   
//     />

//     <MediaCard
//       title="car"
//       body="this is a car"
//       imageURL={carImage}

//      />


//     <MediaCard
//       title="bike"
//       body="this is a bike"
//       imageURL={bikeImage}
//     />


//   </div>

// }





//ReactDOM.render(<Mediapage />, document.querySelector("#root"))

//method 1
ReactDOM.render(
<>

<MediaCard
  title="bus"
  body="this is a bus"
  imageURL={busImage}
  
/>


<MediaCard
  title="car"
  body="this is a car"
  imageURL={carImage}
  
/>


<MediaCard
  title="bike"
  body="this is a bike"
  imageURL={bikeImage}
  
/>


</>
, document.querySelector("#root"))





