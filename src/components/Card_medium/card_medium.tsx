import { component$ } from "@builder.io/qwik";
import styles from "./card_medium.module.css";

interface ItemProps {
   imageSrc: string;
   name: string;
   place: string;
   mark: number;
   waiting_time: number;
   order_type: string;
}

export default component$<ItemProps>((props) => {
   return (
      <>
         <article class={styles.card_container}>
            <div class={styles.institution_img_box}>
               <img src={props.imageSrc} />
            </div>
            <h3 class={styles.institution_name}>{props.name}</h3>
            <footer class={styles.institution_place}>{props.place}</footer>
            <header class={styles.institution_info}>
               <section>
                  <h4 class="invisible">Оценка заведения</h4>
                  <div class={styles.mark}>{props.mark}</div>
               </section>
               <section>
                  <h4 class="invisible">Время ожидания доставки</h4>
                  <div class={styles.waiting_time}>
                     {props.waiting_time + " min"}
                  </div>
               </section>
               <section>
                  <h4 class="invisible">Цена доставки</h4>
                  <div class={styles.order_type}>{props.order_type}</div>
               </section>
            </header>
         </article>
      </>
   );
});
