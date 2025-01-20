import { component$ }  from '@builder.io/qwik';
import styles from "./welcome.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.logo}>
                <img src="/public/logo.svg" alt="Логотип компании Tamang FoodService" />
                <h1>Tamang<br />FoodService</h1>
            </div>
            <img src="/public/welcome_icecream.png" alt="Картинка как девушка обнимает мороженое" />
            <secttion class={styles.info}>
                <h2>Welcome</h2>
                <p>It’s a pleasure to meet you. We are excited that you’re here so let’s get started!</p>
            </secttion>
            <Link class={styles.get_started_link} href="/walkthrough">Get Started</Link>
       </div>
    </>)
})

