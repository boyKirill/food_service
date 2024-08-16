import {
   $,
   component$,
   useComputed$,
   useSignal,
   useStore,
   useTask$,
   useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useLocation, useNavigate } from "@builder.io/qwik-city";
import styles from "./search.module.css";
import Menu from "~/components/Menu/menu";
import Card_small from "~/components/Card_small/card_small";
import type { Data } from "~/routes/api/searchrest";

export const useData = routeLoader$(async () => {
   try {
      const res = await fetch("http://localhost:5173/api/searchrest/");
      const rest = await res.json();

      return rest as Data[];
   } catch (e) {
      return null;
   }
});

export default component$(() => {
   const { dataCard, pageSize, total, page } = useData().value;
   const ORIGINAL_DATA = dataCard;
   const search = useSignal("");
   const navPage = useSignal(page ? page : "1");
   const pageCount = useSignal(
      total % pageSize == 0 ? total / pageSize : Math.ceil(total / pageSize)
   );

   const location = useLocation();
   const urlPag = location.url;

   if (ORIGINAL_DATA.value === null) {
      return <>Error</>;
   }

   const setLinks = useComputed$(() => {
      if (navPage.value == 1) {
         return {
            next: pageCount.value == 1 ? null : navPage.value + 1,
            prev: null,
         };
      } else if (navPage.value == pageCount.value) {
         console.log(" pageCount.value");
         console.log(pageCount.value);
         return {
            next: null,
            prev: navPage.value - 1,
         };
      } else {
         return {
            next: navPage.value + 1,
            prev: navPage.value - 1,
         };
      }
   });

   useVisibleTask$(() => {
      const pageNum = urlPag.searchParams.get("page");

      if (!pageNum) {
         urlPag.searchParams.set("pageSize", pageSize);
         urlPag.searchParams.set("page", navPage.value);
         window.history.pushState({}, "", urlPag);
         return;
      }
      navPage.value = Number(pageNum);

      const urlParams = new URLSearchParams(window.location.search);

      const searchInputParam = urlParams.get("searchInputParam");
      if (searchInputParam) {
         search.value = searchInputParam;
      }
   });

   const list = useComputed$(() => {
      const searchParam = search.value.toLocaleLowerCase().trim();

      if (searchParam.length > 0) {
         const filteredArr = ORIGINAL_DATA.filter((e) =>
            e.name.toLocaleLowerCase().includes(searchParam)
         );

         filteredArr.length <= pageSize
            ? (pageCount.value = 1)
            : (pageCount.value =
                 filteredArr.length % pageSize == 0
                    ? filteredArr.length / pageSize
                    : Math.ceil(filteredArr.length / pageSize));

         return filteredArr;
      }

      pageCount.value =
         total % pageSize == 0 ? total / pageSize : Math.ceil(total / pageSize);

      return ORIGINAL_DATA; // no filtering, return original list
   });
   const cardArr = useComputed$(() => {
      const end = pageSize * navPage.value;
      const start = end - pageSize;
      return list.value.slice(start, end);
   });

   const handleChange = $((event) => {
      navPage.value = 1;

      search.value = event.target.value;
      console.log(search.value);

      const url = new URL(window.location);

      url.searchParams.set("page", navPage.value);
      url.searchParams.set("searchInputParam", search.value);
      window.history.pushState({}, "", url);
   });

   const getNuvLinks = () => {
      return (
         <div class={styles.pagination}>
            <a
               class={[
                  styles.pag_prev,
                  setLinks.value.prev ? null : styles.disabled_link,
               ]}
               href={`?pageSize=${pageSize}&page=${setLinks.value.prev ? setLinks.value.prev : "#"}&searchInputParam=${search.value}`}>
               <span></span>
            </a>
            <span class={styles.page_num}>{navPage.value}</span>
            <a
               class={[
                  styles.pag_next,
                  setLinks.value.next ? null : styles.disabled_link,
               ]}
               href={`?pageSize=${pageSize}&page=${setLinks.value.next ? setLinks.value.next : "#"}&searchInputParam=${search.value}`}>
               <span></span>
            </a>
         </div>
      );
   };

   const generateKey = () =>
      `key-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

   return (
      <div>
         <form action="/Search" class={styles.search_form}>
            <h1>Search</h1>
            <label>
               <span class="invisible">search input of products</span>
               <input
                  type="search"
                  placeholder="Search on foodly"
                  bind:value={search}
                  onInput$={handleChange}
               />
            </label>
         </form>
         <section class={styles.found_products_container}>
            <h2>Top Restaurants</h2>
            <div class={styles.found_products}>
               <Card_small key={generateKey()} data={cardArr.value} />
            </div>
         </section>
         {getNuvLinks()}
         <Menu />
      </div>
   );
});

export const head: DocumentHead = {
   title: "Search",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
