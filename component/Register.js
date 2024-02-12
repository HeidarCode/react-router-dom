import React , {useState } from "react"
import { Link } from "react-router-dom"

import "../style/Register.css"
import { createRef } from "react"


import Fani_Organaze from "../style/دانلود-رایگان-وکتور-لوگو-آرم-سازمان-آموزش-فنی-و-حرفه-ای-کشور.png"
// import { Jwt } from "jsonwebtoken"
import Info from "./Info_Register"
import Info_Register from "./Info_Register"


const Register = ({}) => {
 const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
 };
//  const handleSignIn = () => {
//   const token = Jwt.sign({username :'username'} , 'secretkey', {expiresIn : '1h'})
 

   const handleSignInClick = () => {
     setIsSignUp(false);
   }
   const[isModalOpen , setIsModalOppen] = useState(false)

  const openModal = (e) => {
    // e.preventDefault()
    setIsModalOppen(true)
  }

  const closeModal  = () => {
    setIsModalOppen(false)

  }
  return (
    
     <div className={`container ${isSignUp ? 'right-panel-active' : ''} `}>
       <div className="form-container sign-up-container">
         <form>
           <h1>ساخت حساب کاربری </h1>
         
          <input type="text" name="نام" placeholder="نام" />
          <input type="text" name="نام خانوادگی" placeholder="نام خانوادگی" />
        <input type="text" name="کد ملی " placeholder="کد ملی" />




        <Link to={Info_Register} >
        <button >صفحه ی بعدی  </button>
        </Link>
        
          {isModalOpen && (
            <div className="modal">
              <div className="modal_Content">
                <span className="close" onClick={closeModal}>&times</span>
                <p>this is a modal !</p>

              </div>
            </div>

          )}
        </form>
        
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <img  src={Fani_Organaze}/>
          <h1>ورود</h1>
        
          <input type="text" name="کد ملی" placeholder="کدملی" />
          <input type="password" name="password" placeholder="رمز عبور" />
          <a href="#">آیا رمز عبور خود را فراموش کرده اید  ؟</a>
          <button>ورود </button>
        </form>
       </div>
       <div className="overlay-container">
         <div className="overlay">
           <div className="overlay-panel overlay-left">
             <h1> !سلامی دوباره </h1>
             <p>برای ورود به  حساب کاربری خودت کلیک کن </p>
             <button className="ghost" onClick={handleSignInClick}>ورود</button>
           </div>
           <div className="overlay-panel overlay-right">
             <h1>سلام دانشجوی عزیز </h1>
             <p>برای شرکت در دوره هادر سایت ثبت نام کن</p>
           <button className="ghost" onClick={handleSignUpClick}>ثبت نام </button>
           </div>
         </div>
       </div>
     </div>
  );
        


  
        }



export default Register



    // <a href="http://localhost8080/Info_Register.js" style={{color : "#FFFFFF",}}>رفتن به مرحله بعد</a>