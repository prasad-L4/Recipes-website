import React from "react";
import "./Login.css";

function Login() {
  return <div className="login">
    <div>
        <img className="photo" src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021-450x338.png" alt="" />
    </div>
    <div className="line">
        
       <p className="text-1">get it now</p>
       <p className="text-2">SPRINKLE OF FLAVOR COOKBOOK</p>
       <p className="text-3">The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!</p>
       <section><div className="input">
        <input className="input-email" type="text" placeholder="Email" />
        <input type="text" className="input-password" placeholder="password" />
   
    </div>
    <button className="go-btn">GO</button></section>
    </div>

    
    
    
  </div>;
}

export default Login;
