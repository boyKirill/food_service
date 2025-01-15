import { component$ }  from '@builder.io/qwik';
import styles from "./signin.module.css";

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <a href="/walkthrough/#walkthrough3" class={styles.back_link}></a>
                <div class={styles.page_name}>Sign In</div>
            </div>
            <section class={styles.sign_in}>
                <h1>Welcome to Tamang Food Services</h1>
                <p>Enter your Phone number or Email address for sign in. Enjoy your food :)</p>
                <form action="" class={styles.sign_in_form}  id="sign_in_form">
                    <label>
                        <span>Email address</span>
                        <input type="email" name='email' placeholder='food.service@gmail.com' required/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" minlength="8" placeholder='!shd34A4k' required/>
                    </label>
                </form>
                <a href="/reset_pass" class={styles.reset_pass}>Forget Password?</a>
                <button class={styles.submit_btn} type="submit" form="sign_in_form" value="Submit">Submit</button>
                <div class={styles.new_acc_container}>
                    <span class={styles.have_acc_question}>Don’t have account?</span>
                    <a href="/cre_new_acc" class={styles.cre_new_acc}>Create new account.</a>
                    <div class={styles.text_for_alt}>Or</div>
                    <a href="" class={styles.facebook}>Connect with Facebook</a>
                    <a href="" class={styles.google}>Connect with google</a>
                </div>
            </section>
       </div>
    </>)
})

