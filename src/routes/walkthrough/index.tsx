import { component$ }  from '@builder.io/qwik';
import styles from "./walkthrough.module.css";

export default component$(() => {
    return( 
    <>
        <div class={styles.slider}>
            <div id='walkthrough1' class={styles.slide}>
                <div class={styles.wrapper}>
                <div class={styles.logo}>
                    <img src="/public/logo.svg" alt="Логотип компании Tamang FoodService" />
                    <h1>Tamang<br />FoodService</h1>
                </div>
                <img src="/public/walkthrough/i1.png" alt="Картинка как девушка обнимает мороженое" />
                <secttion class={styles.info}>
                    <h2>All your favorites</h2>
                    <p>Order from the best local restaurants with easy, on-demand delivery.</p>
                </secttion>
                <div class={styles.indicators}>
                    <a class={styles.active} href="#walkthrough1"></a>
                    <a href="#walkthrough2"></a>
                    <a href="#walkthrough3"></a>
                </div>
                <a class={styles.get_started_link} href="#walkthrough2">Get Started</a>
            </div>
            </div>
                <div id='walkthrough2' class={styles.slide}>
                <div class={styles.wrapper}>
                    <div class={styles.logo}>
                        <img src="/public/logo.svg" alt="Логотип компании Tamang FoodService" />
                        <h1>Tamang<br />FoodService</h1>
                    </div>
                    <img src="/public/walkthrough/i2.png" alt="Картинка как девушка обнимает мороженое" />
                    <secttion class={styles.info}>
                        <h2>Free delivery offers</h2>
                        <p>Free delivery for new customers via Apple Pay and others payment methods.</p>
                    </secttion>
                    <div class={styles.indicators}>
                        <a href="#walkthrough1"></a>
                        <a class={styles.active} href="#walkthrough2"></a>
                        <a href="#walkthrough3"></a>
                    </div>
                    <a class={styles.get_started_link} href="#walkthrough3">Get Started</a>
                    </div>
                </div>
            <div id='walkthrough3' class={styles.slide}>
                <div class={styles.wrapper}>
                    <div class={styles.logo}>
                        <img src="/public/logo.svg" alt="Логотип компании Tamang FoodService" />
                        <h1>Tamang<br />FoodService</h1>
                    </div>
                    <img src="/public/walkthrough/i3.png" alt="Картинка как девушка обнимает мороженое" />
                    <secttion class={styles.info}>
                        <h2>Choose your food</h2>
                        <p>Easily find your type of food craving and you’ll get delivery in wide range.</p>
                    </secttion>
                    <div class={styles.indicators}>
                        <a href="#walkthrough1"></a>
                        <a href="#walkthrough2"></a>
                        <a class={styles.active} href="#walkthrough3"></a>
                    </div>
                    <a class={styles.get_started_link} href="/signin">Get Started</a>
                </div>
            </div>
        </div>
    </>)
})

