import { component$ } from "@builder.io/qwik";
import {  Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./singlerest.module.css";

import Menu from "~/components/Menu/menu";
import type { dataCardFood } from "~/routes/api/partnersAll/[id]";

export const useSingleRest = routeLoader$(async (event) => {
   const { id } = event.params; 
   console.log("Fetching data for partner ID:", id);

   try {
      const res = await fetch(`http://localhost:5173/api/partnersAll/${id}`);
      
      // Логируем статус ответа
      console.log(`Response status: ${res.status}`);

      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      return rest as dataCardFood;
   } catch (error) {
      console.error("Error fetching data of rest:", error);
      throw new Error(`Failed to fetch data: `);
   }
   
});


export default component$(() => {
   const restData = useSingleRest().value;

   return (
      <>
         <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/" class={styles.back_link}></Link>
                <Link href="/" class={styles.share}></Link>
                <Link href="/" class={styles.search}></Link>
            </div>
            <section class={styles.rest}>
               
               <ul class={styles.rest_slider}>
                  {restData.imagesArr.map((image)=>(
                     <li class={styles.slide} key={"q" + restData.id}><img src={image} alt="" /></li>
                  ))}
               </ul>
               <h1 class={styles.rest_name}>{restData.name}</h1>
               <ul class={styles.kitchen_list}>
                  {restData.kitchensArr.map((kitchen)=>(
                     <li key={"w" + restData.id}>{kitchen}</li>
                  ))}
               </ul>
               <Link href="">
                  <span class={styles.rest_mark}>{restData.mark}</span>
                  <span class={styles.rest_ratingsNum}>{Math.round(restData.ratingsNum / 100) * 100 + "+ Ratings"} </span>
               </Link>
               <header>
                  <dl>
                     <div>
                        <dt><img src="dollar_oringe.svg" alt="Delivery icon" /><span class={styles.invisible}>Delivery</span></dt>
                        <dd>{restData.order_type}<span>Delivery</span></dd>
                     </div>
                     <div>
                     <dt><img src="clock_fire.svg" alt="Waiting time icon" /><span class={styles.invisible}>Waiting time</span></dt>
                        <dd>{restData.waiting_time}<span>Minutes</span></dd>
                     </div>
                  </dl>
               </header>
               <button>Take away</button>
            </section>
            
            
            <Menu />
       </div>
      </>
   );
});

export const head: DocumentHead = {
   title: "Single restaurant",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
