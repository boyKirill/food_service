import { component$ }  from '@builder.io/qwik';
import styles from "./signin.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/walkthrough/#walkthrough3" class={styles.back_link}></Link>
                <div class={styles.page_name}>Sign In</div>
            </div>
            <section class={styles.sign_in}>
                <h1>Welcome to Tamang Food Services</h1>
                <p>Enter your Phone number or Email address for sign in. Enjoy your food :)</p>
                <form action="" class={styles.sign_in_form}  id="sign_in_form">
                    <label>
                        <span>Email address</span>
                        <input type="email" name='email' placeholder='food.service@gmail.com' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                    <label> 
                        <span>Password</span>
                        <input type="password" name="password" minLength={8} placeholder='!shd34A4k' required/>
                        <div class={styles.validity_icon}></div>
                    </label>
                </form>
                <Link href="/forgotpass" class={styles.reset_pass}>Forget Password?</Link>
                <button class={styles.submit_btn} type="submit" form="sign_in_form" value="Submit">Sign in</button>
                <div class={styles.new_acc_container}>
                    <span class={styles.have_acc_question}>Don’t have account?</span>
                    <Link href="/signup" class={styles.cre_new_acc}>Create new account.</Link>
                    <div class={styles.text_for_alt}>Or</div>
                    <Link href="" class={styles.facebook}>Connect with Facebook</Link>
                    <Link href="" class={styles.google}>Connect with google</Link>
                </div>
            </section>
       </div>
    </>)
})

