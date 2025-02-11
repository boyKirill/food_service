import { component$ }  from '@builder.io/qwik';
import styles from "./f_partners.module.css";
import Menu from '~/components/Menu/menu';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
// import type { dataCardFood } from '../api/partnersAll';
import CardFood from '~/components/CardFood/cardFood';
import type { dataCardFood } from '../api/partnersAll';

export const usePartnersRest = routeLoader$(async () => {
   try {
      const res = await fetch("http://localhost:5173/api/partnersAll");
    //   const res = await fetch(
    //      "https://main--famous-haupia-a6154c.netlify.app/api/partners/"
    //   );
      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      return rest as dataCardFood[];
   } catch (error) {
      console.error("Error fetching partners:", error);
      return []; // Возвращаем пустой массив в случае ошибки
   }
});

export default component$(() => {
       const signalPartnersRest = usePartnersRest();
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/" class={styles.back_link}></Link>
                <div class={styles.page_name}>Featured Partners</div>
            </div>
            <ul class={styles.food_cards_list}>
                <CardFood data={signalPartnersRest.value} linkForItems='/singlerest/'/>
            </ul>
            <Menu />
       </div>
    </>)
})
