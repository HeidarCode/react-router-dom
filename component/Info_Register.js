import React from "react";
import styles from "../style/Info_Register.module.css"
 import { Link } from "react-router-dom";

const Info_Register = () => {
    return (
        <div className= {styles.Modal}>
            <h1>فرم ثبت نام دانشجویان </h1>
            <div className={styles.ModalContent}>
                <input type="tel"  placeholder="09101234879"/>
                <input  type="tel" placeholder="0211234567"/>
                <input  type="email" placeholder="exmple@gmail.com"/>
                <input type="text" placeholder="تاریخ تولد "/>
                <input type="tel" placeholder="شماره ی ننت رو وارد کن "/>
                <Link to= "./Register.js">بازگشت به صفحه ی اصلی</Link> 
                </div>            
            
            </div>

                
       
      
    ) 

}

export default Info_Register