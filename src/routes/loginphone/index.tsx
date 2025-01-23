import { $, component$, }  from '@builder.io/qwik';
import {Link, useNavigate } from '@builder.io/qwik-city';
import styles from "./loginphone.module.css";

export default component$(() => {
    const navigate = useNavigate();
  
    const handleSubmit = $(async (e: Event) => {
        const form = e.target as HTMLFormElement | null

        if(form){
            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData);
            
            try{
                const response = await fetch('http://localhost:3000/loginphone', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formDataObj),
                    });
                
                if(!response.ok){
                    console.error('Ошибка сервера:', response.status);
                    alert(`Ошибка:'Не удалось отправить данные'`);
                    return;
                }
            } catch(e){
                console.error('Ошибка сети или выполнения:', e);
            }
            
            navigate('/confirmphone');
        } else{
            throw Error("Произошла ошибка!")
        }
    })
    
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/signin" class={styles.back_link}></Link>
                <div class={styles.page_name}>Login to Tamang Food <br /> Services</div>
            </div>
            <section class={styles.login_phone}>
                <h1>Get started with Foodly</h1>
                <p>EEnter your phone number to use foodly and enjoy your food :)</p>
                <form action="" onSubmit$={handleSubmit} preventdefault:submit class={styles.login_phone_form}>
                    <label>
                        <span>Phone Number <small>Format: 89278677252</small></span>
                        <input type="tel" name="phone" maxLength={11} pattern="[0-9]{11}" required />
                        <div class={styles.validity_icon}></div>
                    </label>
                    <button class={styles.submit_btn}>Sign up</button>
                 </form>
            </section>
       </div>
    </>)
})

