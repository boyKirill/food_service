import { component$ } from "@builder.io/qwik";
import styles from "./card_xsmall.module.css";
import { Link } from "@builder.io/qwik-city";

interface ItemProps {
   categoryImageSrc: string;
   categoryName: string;
}

export default component$<ItemProps>((props) => {
   return (
      <>
         <article
            class={styles.card_container}
            style={`background: url(${props.categoryImageSrc}) center / cover no-repeat;`}>
            <h3 class={styles.category_name}>{props.categoryName}</h3>
            <Link href="/" class={styles.category_link}>
               <span class="invisible">
                  Ссылка на категорию {props.categoryName}
               </span>
            </Link>
         </article>
      </>
   );
});
