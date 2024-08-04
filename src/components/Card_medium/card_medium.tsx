import { component$ } from "@builder.io/qwik";
import styles from "./card_medium.module.css";
import { Link } from "@builder.io/qwik-city";

interface Card_medium {
   imageSrc: string;
   name: string;
   place: string;
   mark: number;
   waiting_time: number;
   order_type: string;
}
interface ItemProps {
   data: Card_medium[];
}

export default component$<ItemProps>((props) => {
   return (
      <>
         {props.data.map((item) => (
            <article class={styles.card_container}>
               <Link href="/" class={styles.card_link}></Link>
               <div class={styles.institution_img_box}>
                  <img src={item.imageSrc} />
               </div>
               <h3 class={styles.institution_name}>{item.name}</h3>
               <address class={styles.institution_place}>{item.place}</address>
               <header class={styles.institution_info}>
                  <section>
                     <h4 class="invisible">Оценка заведения</h4>
                     <div class={styles.mark}>{item.mark}</div>
                  </section>
                  <section>
                     <h4 class="invisible">Время ожидания доставки</h4>
                     <div class={styles.waiting_time}>
                        {item.waiting_time + " min"}
                     </div>
                  </section>
                  <section>
                     <h4 class="invisible">Цена доставки</h4>
                     <div class={styles.order_type}>{item.order_type}</div>
                  </section>
               </header>
            </article>
         ))}
      </>
   );
});
