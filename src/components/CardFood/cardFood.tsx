import { component$ } from "@builder.io/qwik";
import styles from "./cardFood.module.css";
import { Link } from "@builder.io/qwik-city";
import type { dataCardFood } from "~/routes/api/partnersAll";

interface itemProps {
  data: dataCardFood[];
  linkForItems:string;
}

export default component$<itemProps>((props) => {

  return (
    <>
      {props.data.map((item, index) => (
      
        <li key={item.id} class={styles.list_item}>
          <article class={styles.card_container}>
          <Link href={props.linkForItems + (index + 1)} class={styles.card_link}></Link>
          <div class={styles.institution_img_box}>
            <img src={item.imageSrc} />
            <header class={styles.institution_info}>
              <section>
                <h4 class="invisible">Оценка заведения</h4>
                <div class={styles.mark}>{item.mark}</div>
              </section>
              <section>
                <h4 class="invisible">Время ожидания доставки</h4>
                <div class={styles.waiting_time}>
                  {item.waiting_time + "min"}
                </div>
              </section>
              <section>
                <h4 class="invisible">Цена доставки</h4>
                <div class={styles.order_type}>{item.order_type}</div>
              </section>
            </header>
          </div>
          <h3 class={styles.institution_name}>{item.name}</h3>
          <ul class={styles.kitchen_list}>
                     {item.kitchensArr.map((kitchen_name) => (
                        <li key={kitchen_name}>{kitchen_name}</li>
                     ))}
                  </ul>
        </article>
        </li>
        
      ))}
    </>
  );
});
