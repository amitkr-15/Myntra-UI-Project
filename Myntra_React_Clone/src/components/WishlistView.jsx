import { useState } from "react";

function WishlistView(){
  const[time, setTime] = useState(new Date());
  setInterval(()=>{
    setTime(new Date());
  } , 1000);
  return(
    <>
    <div className="DateTime">Early Access Starts in : {time.toLocaleTimeString()} </div>
    
    

    </>
  );
};
export default WishlistView;