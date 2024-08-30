import { component$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

import styles from "./pagination.module.css";

interface itemProps {
   pagObject: {
      prev: number | null;
      current: number;
      next: number | null;
   };
}

export default component$<itemProps>(({ pagObject }) => {
   // Используем useNavigate для изменения URL
   const navigate = useNavigate();

   const handleChange = $((event: Event, navDirection: string) => {
      if (navDirection == "prev") {
         pagObject.current -= 1;
      } else {
         pagObject.current += 1;
      }

      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", pagObject.current.toString());

      // Переход по новому URL с использованием useNavigate
      navigate(`?${urlParams.toString()}`);
   });

   return (
      <>
         <div class={styles.pagination}>
            <button
               class={styles.pag_prev}
               onClick$={(e) => handleChange(e, "prev")}
               disabled={pagObject.prev === null}>
               <span></span>
            </button>
            <span class={styles.page_num}>{pagObject.current}</span>
            <button
               class={styles.pag_next}
               onClick$={(e) => handleChange(e, "next")}
               disabled={pagObject.next === null}>
               <span></span>
            </button>
         </div>
      </>
   );
});


