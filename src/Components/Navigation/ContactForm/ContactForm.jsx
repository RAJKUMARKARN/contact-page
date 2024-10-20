import React from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ContactForm = () => {

   const onViaCallSubmit =()=>{
    alert(" directing to the Our Executive")
   }
   const onSubmit =(e)=>{
    e.preventDefault()
    console.log("name",e.target[0].value);
    console.log("name",e.target[1].value);
    console.log("name",e.target[2].value);

   }





  return (
    <div className={styles.container}>
      <div className={styles.contact_Form}>

        <div className={styles.top_btn}>

        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>

        
        <Button  onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt   fontSize="24px"/>}/>
        </div>
        <Button isOutline ={true} text="VIA EMAIL FORM" icon={<HiMail   fontSize="24px"/>}/>

        {/* input form starts here
         */}
         <form onSubmit={onSubmit} >

          {/* //Name */}
          <div className={styles.form_controller}>

          <label htmlFor="name">  Name</label>
          <input type="text" name="name" />

          </div>
          {/* email*/}
          <div className={styles.form_controller}>

          <label htmlFor="email">  Email</label>
          <input type="email" name="eamil" />

          </div>

          {/* text-area */}
          <div className={styles.form_controller}>

          <label htmlFor="text"> Text</label>
          <textarea name="text" rows="8"/>

          </div>
          <div
          style={{
            display:'flex',
            justifyContent:'end',
          }}>
          <Button text="SUBMIT" />
          </div>


         </form>
        </div>
     <div className={styles.contact_image}>
      <img src="/src/images/contactimage.png" alt="" />
     </div>



    </div>
  )
}

export default ContactForm
