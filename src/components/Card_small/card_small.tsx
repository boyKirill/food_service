import { component$ } from "@builder.io/qwik";
import styles from "./card_small.module.css";
import { Link } from "@builder.io/qwik-city";

interface ItemProps {
   dishImageSrc: string;
   dishName: string;
   dishPriceRange: number;
   dishKitchen: string;
}

export default component$<ItemProps>((props) => {
   const getPriceRange = (num: number) => {
      let str = "";
      for (let i = 1; i <= num; i++) {
         str += "$";
      }
      return str;
   };
   return (
      <>
         <article class={styles.card_container}>
            <div class={styles.image_box}>
               <img src={props.dishImageSrc} alt="" />
            </div>
            <h3 class={styles.dish_name}>{props.dishName}</h3>
            <Link href="/" class={styles.dish_link}></Link>
            <header>
               <div class={styles.price_range}>
                  {getPriceRange(props.dishPriceRange)}
               </div>
               <div class={styles.kitchen}>{props.dishKitchen}</div>
            </header>
         </article>
      </>
   );
});
