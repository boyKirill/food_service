import { component$ } from "@builder.io/qwik";
import styles from "./menu.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
   return (
      <>
         <nav class={styles.navigation}>
            <ul class={styles.navigation_list}>
               <li>
                  <Link
                     href="/"
                     class={[
                        styles.navigation_link,
                        styles.home_link,
                        styles.active,
                     ]}>
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href="/search"
                     class={[styles.navigation_link, styles.search_link]}>
                     Search
                  </Link>
               </li>
               <li>
                  <Link
                     href="/orders"
                     class={[styles.navigation_link, styles.orders_link]}>
                     Orders
                  </Link>
               </li>
               <li>
                  <Link
                     href="/profile"
                     class={[styles.navigation_link, styles.profile_link]}>
                     Profile
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
});
