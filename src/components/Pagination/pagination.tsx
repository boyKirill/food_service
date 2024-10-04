import { component$ } from "@builder.io/qwik";

import styles from "./pagination.module.css";
import { Link, useLocation } from "@builder.io/qwik-city";

type Pagination =
   | { pageCount: number }
   | {
        kind: "start" | "medium" | "end" | "onePage";
        current: number;
     };

const getPagination = (paginationFromURL: {
   count: number;
   current: number;
}): Pagination => {
   const { count, current } = paginationFromURL;

   if (current === 1 && count > 1) {
      return { kind: "start", current };
   }
   if ((current === count && current > 1) || current > count) {
      return { kind: "end", current };
   }
   if (current === 1 && count === 1) {
      return { kind: "onePage", current };
   }
   return { kind: "medium", current };
};

const parseURL = (url: URL) => {
   const current = Number(url.searchParams.get("page")) || 1;
   const count = Number(url.searchParams.get("pageCount")) || 1;
   const pageSize = Number(url.searchParams.get("pageSize")) || 10;

   return {
      current,
      count,
      pageSize,
   };
};

export default component$(() => {
   const location = useLocation();
   const paginationFromURL = parseURL(location.url);
   const pagination = getPagination(paginationFromURL);

   const prevPageUrl = new URL(location.url.href);
   const nextPageUrl = new URL(location.url.href);
   if ("current" in pagination) {
      prevPageUrl.searchParams.set("page", (pagination.current - 1).toString());
      nextPageUrl.searchParams.set("page", (pagination.current + 1).toString());
   } else {
      // обработка случая, если 'current' отсутствует
      console.log("Pagination does not have current property");
   }

   if ("kind" in pagination) {
      switch (pagination.kind) {
         case "start":
            return (
               <div class={styles.pagination}>
                  <Link
                     href=""
                     preventdefault:click
                     class={[styles.pag_prev, styles.disabled]}>
                     <span></span>
                  </Link>
                  <span class={styles.page_num}>{pagination.current}</span>
                  <Link href={nextPageUrl.toString()} class={styles.pag_next}>
                     <span></span>
                  </Link>
               </div>
            );
         case "medium":
            return (
               <div class={styles.pagination}>
                  <Link href={prevPageUrl.toString()} class={styles.pag_prev}>
                     <span></span>
                  </Link>
                  <span class={styles.page_num}>{pagination.current}</span>
                  <Link href={nextPageUrl.toString()} class={styles.pag_next}>
                     <span></span>
                  </Link>
               </div>
            );
         case "end":
            return (
               <div class={styles.pagination}>
                  <Link href={prevPageUrl.toString()} class={styles.pag_prev}>
                     <span></span>
                  </Link>
                  <span class={styles.page_num}>{pagination.current}</span>
                  <Link
                     href=""
                     preventdefault:click
                     class={[styles.pag_next, styles.disabled]}>
                     <span></span>
                  </Link>
               </div>
            );
         case "onePage":
            return (
               <div class={styles.pagination}>
                  <Link
                     href=""
                     preventdefault:click
                     class={[styles.pag_prev, styles.disabled]}>
                     <span></span>
                  </Link>
                  <span class={styles.page_num}>{pagination.current}</span>
                  <Link
                     href=""
                     preventdefault:click
                     class={[styles.pag_next, styles.disabled]}>
                     <span></span>
                  </Link>
               </div>
            );
      }
   }
});
