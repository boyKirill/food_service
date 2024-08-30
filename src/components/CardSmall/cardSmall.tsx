import { component$ } from "@builder.io/qwik";
import styles from "./cardSmall.module.css";
import { Link } from "@builder.io/qwik-city";
import type { Data } from "~/routes/api/searchrest";

interface itemProps {
  data: Data[];
}

export default component$<itemProps>((props) => {
  const getPriceRange = (num: number) => {
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "$";
    }
    return str;
  };
  return (
    <>
      {props.data.map((item) => (
        <article key={item.key} class={styles.card_container}>
          <div class={styles.image_box}>
            <img src={item.imageSrc} alt="" />
          </div>
          <h3 class={styles.dish_name}>{item.name}</h3>
          <Link href="/" class={styles.dish_link}></Link>
          <header>
            <div class={styles.price_range}>
              {getPriceRange(item.price_range)}
            </div>
            <ul class={styles.kitchen}>
              {item.kitchensArr.map((kitchen_name) => (
                <li key={kitchen_name}>{kitchen_name}</li>
              ))}
            </ul>
          </header>
        </article>
      ))}
    </>
  );
});
