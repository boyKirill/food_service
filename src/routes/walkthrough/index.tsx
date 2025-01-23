import { component$ }  from '@builder.io/qwik';
import styles from "./walkthrough.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return( 
    <>
        <div class={styles.slider}>
            <div id='walkthrough1' class={styles.slide}>
                <div class={styles.wrapper}>
                <div class={styles.logo}>
                    <img src="/logo.svg" alt="Логотип компании Tamang FoodService" />
                    <h1>Tamang<br />FoodService</h1>
                </div>
                <img src="/walkthrough/i1.png" alt="Картинка как девушка обнимает мороженое" />
                <secttion class={styles.info}>
                    <h2>All your favorites</h2>
                    <p>Order from the best local restaurants with easy, on-demand delivery.</p>
                </secttion>
                <div class={styles.indicators}>
                    <Link class={styles.active} href="#walkthrough1"></Link>
                    <Link href="#walkthrough2"></Link>
                    <Link href="#walkthrough3"></Link>
                </div>
                <Link class={styles.get_started_link} href="#walkthrough2">Get Started</Link>
            </div>
            </div>
                <div id='walkthrough2' class={styles.slide}>
                <div class={styles.wrapper}>
                    <div class={styles.logo}>
                        <img src="/logo.svg" alt="Логотип компании Tamang FoodService" />
                        <h1>Tamang<br />FoodService</h1>
                    </div>
                    <img src="/walkthrough/i2.png" alt="Картинка как девушка обнимает мороженое" />
                    <secttion class={styles.info}>
                        <h2>Free delivery offers</h2>
                        <p>Free delivery for new customers via Apple Pay and others payment methods.</p>
                    </secttion>
                    <div class={styles.indicators}>
                        <Link href="#walkthrough1"></Link>
                        <Link class={styles.active} href="#walkthrough2"></Link>
                        <Link href="#walkthrough3"></Link>
                    </div>
                    <Link class={styles.get_started_link} href="#walkthrough3">Get Started</Link>
                    </div>
                </div>
            <div id='walkthrough3' class={styles.slide}>
                <div class={styles.wrapper}>
                    <div class={styles.logo}>
                        <img src="/logo.svg" alt="Логотип компании Tamang FoodService" />
                        <h1>Tamang<br />FoodService</h1>
                    </div>
                    <img src="/walkthrough/i3.png" alt="Картинка как девушка обнимает мороженое" />
                    <secttion class={styles.info}>
                        <h2>Choose your food</h2>
                        <p>Easily find your type of food craving and you’ll get delivery in wide range.</p>
                    </secttion>
                    <div class={styles.indicators}>
                        <Link href="#walkthrough1"></Link>
                        <Link href="#walkthrough2"></Link>
                        <Link class={styles.active} href="#walkthrough3"></Link>
                    </div>
                    <Link class={styles.get_started_link} href="/signin">Get Started</Link>
                </div>
            </div>
        </div>
    </>)
})

