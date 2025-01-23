import { component$ }  from '@builder.io/qwik';
import styles from "./emailsent.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/signin" class={styles.back_link}></Link>
                <div class={styles.page_name}>Forgot Password</div>
            </div>
            <section class={styles.forgot_pass}>
                <h1>Reset email sent</h1>
                <p>We have sent a instructions email to sajin tamang@figma.com. <a href="/help" class={styles.help_link}>Having problem?</a></p>
                <button class={styles.submit_btn} type="submit" form="forgot_pass_form" value="Submit">Send again</button>
                <img src="/public/coffee_girl.png" alt="Картинка как девушка чашечку кофе" />
            </section>
       </div>
    </>)
})

