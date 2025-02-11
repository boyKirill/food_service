import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Menu from "~/components/Menu/menu";
import CardMedium from "~/components/CardMedium/cardMedium";
import CardBig from "~/components/CarBig/cardBig";
import type { dataCardBig } from "./api/allrest";
import type { dataCardMedium } from "./api/partners";

export const useAllRest = routeLoader$(async () => {
   try {
      // const res = await fetch("http://localhost:5173/api/allrest/"); //Локальныая
      const res = await fetch(
         "https://main--famous-haupia-a6154c.netlify.app/api/allrest/"
      ); //Сервер
      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      rest.map(
         (item: dataCardBig) =>
            (item.key = `key-${Math.random().toString(36).substr(2, 9)}`)
      );
      return rest as dataCardBig[];
   } catch (error) {
      console.error("Error fetching all restaurants:", error);
      return []; // Возвращаем пустой массив в случае ошибки
   }
});

export const useTeamRest = routeLoader$(async () => {
   try {
      // const res = await fetch("http://localhost:5173/api/teamrest/");
      const res = await fetch(
         "https://main--famous-haupia-a6154c.netlify.app/api/teamrest/"
      );
      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      rest.map(
         (item: dataCardMedium) =>
            (item.key = `key-${Math.random().toString(36).substr(2, 9)}`)
      );
      return rest as dataCardMedium[];
   } catch (error) {
      console.error("Error fetching team restaurants:", error);
      return []; // Возвращаем пустой массив в случае ошибки
   }
});

export const usePartnersRest = routeLoader$(async () => {
   try {
      // const res = await fetch("http://localhost:5173/api/partners/");
      const res = await fetch(
         "https://main--famous-haupia-a6154c.netlify.app/api/partners/"
      );
      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      rest.map(
         (item: dataCardMedium) =>
            (item.key = `key-${Math.random().toString(36).substr(2, 9)}`)
      );
      return rest as dataCardMedium[];
   } catch (error) {
      console.error("Error fetching partners:", error);
      return []; // Возвращаем пустой массив в случае ошибки
   }
});

export default component$(() => {
   const signalAllRest = useAllRest();
   const signalTeamRest = useTeamRest();
   const signalPartnersRest = usePartnersRest();

   return (
      <>
         <main class={styles.content}>
            <form class={styles.filter}>
               <span>Delivery to</span>
               <select class={styles.filter_select} name="select_city" id="">
                  <option value=""> HayStreet, Perth</option>
                  <option value=""> HayStreet, Perth</option>
               </select>
               <button class={styles.filter_btn}>Filter</button>
            </form>
            <div class={styles.container}>
               <section class={styles.slider}>
                  <div class={styles.section_header}>
                     <h2 class={styles.section_name}>Featured Partners</h2>
                     <Link href="/f_partners" class={styles.see_all}>
                        See all
                     </Link>
                  </div>
                  <section class={[styles.media_scroller, styles.snaps_inline]}>
                     <h3 class="invisible">Карточки товара для партнеров</h3>
                     <CardMedium data={signalPartnersRest.value} />
                  </section>
               </section>
               <section class={styles.banner}>
                  <h2 class={styles.banner_titile}>
                     Free Delivery for 1 Month!
                  </h2>
                  <p class={styles.banner_text}>
                     You’ve to order at least $10 for using free delivery for 1
                     month.
                  </p>
               </section>
               <section class={styles.slider}>
                  <div class={styles.section_header}>
                     <h2 class={styles.section_name}>
                        Best Picks Restaurants by team
                     </h2>
                     <a href="/" class={styles.see_all}>
                        See all
                     </a>
                  </div>
                  <section class={[styles.media_scroller, styles.snaps_inline]}>
                     <h3 class="invisible">
                        Карточки товара для командных ресторанов
                     </h3>
                     <CardMedium data={signalTeamRest.value} />
                  </section>
               </section>
               <section class={styles.columns}>
                  <div class={styles.section_header}>
                     <h2 class={styles.section_name}>All Restaurants</h2>
                     <a href="/" class={styles.see_all}>
                        See all
                     </a>
                  </div>
                  <section class={styles.big_cards}>
                     <h3 class="invisible">
                        Карточки товара для для всех ресторанов
                     </h3>
                     <CardBig data={signalAllRest.value} />
                  </section>
               </section>
            </div>

            <Menu />
         </main>
      </>
   );
});

export const head: DocumentHead = {
   title: "Homepage",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
