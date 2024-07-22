import { component$ } from "@builder.io/qwik";
import styles from "./card_big.module.css";
import Carousel from "../Carousel/carousel";

interface ItemProps {
   imageSrcArr: string[];
   name: string;
   kitchen_list: string[];
   mark: number;
   price_range: number;
   ratingsNum: number;
   waiting_time: number;
   order_type: string;
}

export default component$<ItemProps>((props) => {
   const getPriceRange = (num: number) => {
      let str = "";
      for (let i = 1; i <= num; i++) {
         str += "$";
      }
      return str;
   };
   const generateKey = () =>
      `key-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

   return (
      <>
         <article class={styles.card_container}>
            <div class={styles.institution_img_box}>
               <Carousel contentOfSlides={props.imageSrcArr} />
            </div>
            <h3 class={styles.institution_name}>{props.name}</h3>
            <header class={styles.institution_place}>
               <span class={styles.price_range}>
                  {getPriceRange(props.price_range)}
               </span>
               <ul class={styles.kitchen_list}>
                  {props.kitchen_list.map((kitchen_name) => (
                     <li key={generateKey()}>{kitchen_name}</li>
                  ))}
               </ul>
            </header>
            <header class={styles.institution_info}>
               <section>
                  <h4 class="invisible">Оценка заведения</h4>
                  <div class={styles.mark}>{props.mark}</div>
               </section>
               <section>
                  <h4 class="invisible">Количесвто оценок заведения</h4>
                  <div class={styles.ratingsNum}>
                     {Math.round(props.ratingsNum / 100) * 100 + "+ Ratings"}
                  </div>
               </section>
               <section>
                  <h4 class="invisible">Время ожидания доставки</h4>
                  <div class={styles.waiting_time}>
                     {props.waiting_time + " " + "Min"}
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
