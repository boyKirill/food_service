import { component$ } from "@builder.io/qwik";
import styles from "./card_big.module.css";
import Carousel from "../Carousel/carousel";
import { Link } from "@builder.io/qwik-city";

interface AllRest {
   imageSrcArr: string[];
   name: string;
   kitchensArr: string[];
   mark: number;
   price_range: number;
   ratingsNum: number;
   waiting_time: number;
   order_type: string;
}

interface ItemProps {
   data: AllRest[];
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
         {props.data.map((item) => (
            <article class={styles.card_container}>
               <div class={styles.institution_img_box}>
                  <Carousel contentOfSlides={item.imageSrcArr} />
               </div>
               <h3 class={styles.institution_name}>
                  <Link href="/">{item.name}</Link>
               </h3>
               <header class={styles.institution_place}>
                  <span class={styles.price_range}>
                     {getPriceRange(item.price_range)}
                  </span>
                  <ul class={styles.kitchen_list}>
                     {item.kitchensArr.map((kitchen_name) => (
                        <li key={generateKey()}>{kitchen_name}</li>
                     ))}
                  </ul>
               </header>
               <header class={styles.institution_info}>
                  <section>
                     <h4 class="invisible">Оценка заведения</h4>
                     <div class={styles.mark}>{item.mark}</div>
                  </section>
                  <section>
                     <h4 class="invisible">Количесвто оценок заведения</h4>
                     <div class={styles.ratingsNum}>
                        {Math.round(item.ratingsNum / 100) * 100 + "+ Ratings"}
                     </div>
                  </section>
                  <section>
                     <h4 class="invisible">Время ожидания доставки</h4>
                     <div class={styles.waiting_time}>
                        {item.waiting_time + " " + "Min"}
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
