import { $, component$ }  from '@builder.io/qwik';
import styles from "./forgotpass.module.css";
import { Link, useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const navigate = useNavigate();
      
    const handleSubmit = $(async (e: Event) => {
        const form = e.target as HTMLFormElement | null

        if(form){
            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData);
            
            try{
                const response = await fetch('http://localhost:3000/forgotpass', {
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

            navigate('/emailsent');
        } else {
            throw Error("Произошла ошибка!")
        }
    })

    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/signin" class={styles.back_link}></Link>
                <div class={styles.page_name}>Forgot Password</div>
            </div>
            <section class={styles.forgot_pass}>
                <h1>Forgot password</h1>
                <p>Enter your email address and we will send you a reset instructions.</p>
                <form action="" onSubmit$={handleSubmit} preventdefault:submit class={styles.forgot_pass_form}  id="forgot_pass_form">
                    <label>
                        <span>Email address</span>
                        <input type="email" name='email' placeholder='food.service@gmail.com' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                    <button class={styles.submit_btn}>Reset password</button>
                 </form>
            </section>
       </div>
    </>)
})

