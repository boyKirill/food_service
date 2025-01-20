import { component$ }  from '@builder.io/qwik';
import styles from "./signup.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/signin" class={styles.back_link}></Link>
                <div class={styles.page_name}>Forgot Password</div>
            </div>
            <section class={styles.sign_up}>
                <h1>Create Account</h1>
                <p>Enter your Name, Email and Password for sign up. <Link href='/signin' class={styles.alredy_have_acc}>Already have account?</Link></p>
                <form action="" class={styles.sign_up_form}  id="sign_up_form">
                    <label>
                        <span>Full name</span>
                        <input type="text" name='email' placeholder='Sajin Tamang' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                    <label>
                        <span>Email address</span>
                        <input type="email" name='email' placeholder='food.service@gmail.com' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                    <label> 
                        <span>Password</span>
                        <input type="password" name="password" minlength="8" placeholder='!shd34A4k' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                </form>
              
                <button class={styles.submit_btn} type="submit" form="sign_up_form" value="Submit">Sign up</button>
                <div class={styles.new_acc_container}>
                    <span class={styles.have_acc_question}>By Signing up you agree to our Terms Conditions & Privacy Policy.</span>
                    <div class={styles.text_for_alt}>Or</div>
                    <Link href="" class={styles.facebook}>Connect with Facebook</Link>
                    <Link href="" class={styles.google}>Connect with google</Link>
                </div>
            </section>
       </div>
    </>)
})

