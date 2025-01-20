import { $, component$, useStore }  from '@builder.io/qwik';
import styles from "./loginphone.module.css";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    const formData = useStore({ name: '', email: '' });

    const handleSubmit = $(async (e: Event) => {
        e.preventDefault();

        const formData = useStore({ phone: ''});
        // Отправка данных на сервер (моковый сервер)
        const promis = await fetch('http://localhost:3000/phones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        });

        console.log(promis.json)

        // Редирект на другую страницу
        window.location.href = '/signin'; // URL страницы благодарности
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
                <form action="" class={styles.login_phone_form}>
                    <label>
                        <span>Phone Number <small>Format: 89278677252</small></span>
                        <input type="tel" name="phone" maxLength={11} pattern="[0-9]{11}" required />
                        <div class={styles.validity_icon}></div>
                    </label>
                    <button onClick$={handleSubmit} class={styles.submit_btn}>Sign up</button>
                 </form>
            </section>
       </div>
    </>)
})

