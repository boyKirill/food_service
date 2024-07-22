import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import Card_medium from "~/components/Card_medium/card_medium";
import Card_big from "~/components/Card_big/card_big";
import Menu from "~/components/Menu/menu";

export default component$(() => {
   const dataPartners = [
      {
         imageSrc: "/fp1.png",
         name: "Krispy Creme",
         place: "St Georgece Terrace, Perth",
         mark: 4.5,
         waiting_time: 25,
         order_type: "Free delivery",
      },
      {
         imageSrc: "/fp2.png",
         name: "Mario Italiano",
         place: "Hay street , Perth City",
         mark: 4.6,
         waiting_time: 26,
         order_type: "Free delivery",
      },
      {
         imageSrc: "/fp1.png",
         name: "Krispy Creme",
         place: "St Georgece Terrace, Perth",
         mark: 4.5,
         waiting_time: 25,
         order_type: "Free delivery",
      },
   ];
   const dataTeamRestaurants = [
      {
         imageSrc: "/brt1.png",
         name: "McDonald’s",
         place: "Hay street , Perth City",
         mark: 4.7,
         waiting_time: 20,
         order_type: "Free delivery",
      },
      {
         imageSrc: "/brt2.png",
         name: "The Halal Guys",
         place: "Hay street , Perth City",
         mark: 4.3,
         waiting_time: 23,
         order_type: "Free delivery",
      },
      {
         imageSrc: "/brt1.png",
         name: "McDonald’s",
         place: "Hay street , Perth City",
         mark: 4.7,
         waiting_time: 20,
         order_type: "Free delivery",
      },
      {
         imageSrc: "/brt2.png",
         name: "The Halal Guys",
         place: "Hay street , Perth City",
         mark: 4.3,
         waiting_time: 23,
         order_type: "Free delivery",
      },
   ];
   const dataAllRestaurants = [
      {
         imageSrcArr: [
            "/allr1.png",
            "/allr2.png",
            "/allr3.png",
            "/allr1.png",
            "/allr2.png",
         ],
         name: "McDonald’s",
         place: "Hay street , Perth City",
         price_range: 2,
         kitchensArr: [
            "Chinese",
            "American",
            "Deshi food",
            "Chinese",
            "American",
            "Deshi food",
         ],
         mark: 4.3,
         ratingsNum: 256,
         waiting_time: 25,
         order_type: "Free",
      },
      {
         imageSrcArr: [
            "/allr2.png",
            "/allr1.png",
            "/allr3.png",
            "/allr1.png",
            "/allr2.png",
         ],
         price_range: 3,
         name: "McDonald’s",
         place: "Hay street , Perth City",
         kitchensArr: ["Chinese", "American", "Deshi food", "Chinese"],
         mark: 4.3,
         ratingsNum: 356,
         waiting_time: 25,
         order_type: "Free",
      },
      {
         imageSrcArr: [
            "/allr3.png",
            "/allr2.png",
            "/allr3.png",
            "/allr1.png",
            "/allr2.png",
         ],
         price_range: 1,
         name: "McDonald’s",
         place: "Hay street , Perth City",
         kitchensArr: ["Chinese", "American", "Deshi food"],
         mark: 4.3,
         ratingsNum: 1256,
         waiting_time: 25,
         order_type: "Free",
      },
   ];

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
            <section class={styles.slider}>
               <div class={styles.section_header}>
                  <h2 class={styles.section_name}>Featured Partners</h2>
                  <a href="/" class={styles.see_all}>
                     See all
                  </a>
               </div>
               <section class={[styles.media_scroller, styles.snaps_inline]}>
                  <h3 class="invisible">Карточки товара для партнеров</h3>
                  {dataPartners.map((partner) => (
                     <Card_medium
                        imageSrc={partner.imageSrc}
                        name={partner.name}
                        place={partner.place}
                        mark={partner.mark}
                        waiting_time={partner.waiting_time}
                        order_type={partner.order_type}
                     />
                  ))}
               </section>
            </section>
            <section class={styles.banner}>
               <h2 class={styles.banner_titile}>Free Delivery for 1 Month!</h2>
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
                  {dataTeamRestaurants.map((partner) => (
                     <Card_medium
                        imageSrc={partner.imageSrc}
                        name={partner.name}
                        place={partner.place}
                        mark={partner.mark}
                        waiting_time={partner.waiting_time}
                        order_type={partner.order_type}
                     />
                  ))}
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
                  {dataAllRestaurants.map((restaurant) => (
                     <Card_big
                        imageSrcArr={restaurant.imageSrcArr}
                        name={restaurant.name}
                        mark={restaurant.mark}
                        kitchen_list={restaurant.kitchensArr}
                        ratingsNum={restaurant.ratingsNum}
                        waiting_time={restaurant.waiting_time}
                        order_type={restaurant.order_type}
                        price_range={restaurant.price_range}
                     />
                  ))}
               </section>
            </section>
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
