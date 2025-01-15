import { component$ }  from '@builder.io/qwik';
import styles from "./forgotpass.module.css";

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <a href="/walkthrough/#walkthrough3" class={styles.back_link}></a>
                <div class={styles.page_name}>Forgot Password</div>
            </div>
            <section class={styles.forgot_pass}>
                <h1>Forgot password</h1>
                <p>Enter your email address and we will send you a reset instructions.</p>
                <form action="" class={styles.forgot_pass_form}  id="forgot_pass_form">
                    <label>
                        <span>Email address</span>
                        <input type="email" name='email' placeholder='food.service@gmail.com' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                    <button class={styles.submit_btn} type="submit" form="forgot_pass_form" value="Submit">Sign in</button>
                 </form>
            </section>
       </div>
    </>)
})

