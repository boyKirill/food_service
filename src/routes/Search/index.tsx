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
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import styles from "./search.module.css";
import Menu from "~/components/Menu/menu";
import Pagination from "~/components/Pagination/pagination";
import CardSmall from "~/components/CardSmall/cardSmall";
import type { Data } from "~/routes/api/searchrest";

export const useData = routeLoader$(async () => {
   try {
      // const res = await fetch("http://localhost:5173/api/searchrest/"); //Локальный сервер
      const res = await fetch(
         "https://main--famous-haupia-a6154c.netlify.app/api/searchrest/"
      ); //Деплой
      if (!res.ok) {
         throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
         );
      }
      const rest = await res.json();
      const { dataCard } = rest;
      dataCard.map(
         (item: Data) =>
            (item.key = `key-${Math.random().toString(36).substr(2, 9)}`)
      );
      return rest;
   } catch (error) {
      console.error("Error fetching all restaurants:", error);
      return []; // Возвращаем пустой массив в случае ошибки
   }
});

interface pagObject {
   prev: number | null;
   current: number;
   next: number | null;
}

export default component$(() => {
   const { dataCard, pageSize, total, page } = useData().value;
   const ORIGINAL_DATA = dataCard;
   const sortedData = useSignal([]);
   const search = useSignal("");

   const pageCount = useSignal(
      total % pageSize == 0 ? total / pageSize : Math.ceil(total / pageSize)
   );

   const pagObject: pagObject = useStore({
      prev: null,
      current: page,
      next: null,
   });

   const navigate = useNavigate();

   if (ORIGINAL_DATA.value === null) {
      return <>Error</>;
   }

   useTask$(({ track }) => {
      track(() => pagObject.current);
      track(() => pageCount.value);

      if (pagObject.current == 1 && pageCount.value == 1) {
         pagObject.next = null;
         pagObject.prev = null;
      } else if (pagObject.current == 1) {
         pagObject.next = pagObject.current + 1;
         pagObject.prev = null;
      } else if (pagObject.current == pageCount.value) {
         pagObject.next = null;
         pagObject.prev = pagObject.current - 1;
      } else {
         pagObject.next = pagObject.current + 1;
         pagObject.prev = pagObject.current - 1;
      }
   });

   useVisibleTask$(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageNum = urlParams.get("page");

      if (!pageNum) {
         urlParams.set("pageSize", pageSize);
         urlParams.set("page", page.toString());
         navigate(`?${urlParams.toString()}`);
         return;
      }
      pagObject.current = Number(pageNum);

      const searchInputParam = urlParams.get("searchInputParam");
      if (searchInputParam) {
         search.value = searchInputParam;
      }
   });

   useTask$(({ track }) => {
      track(() => search.value);
      const searchParam = search.value.toLocaleLowerCase().trim();

      if (searchParam.length > 0) {
         sortedData.value = ORIGINAL_DATA.filter((e: Data) =>
            e.name.toLocaleLowerCase().includes(searchParam)
         );

         const totalSortArr = sortedData.value.length;

         if (totalSortArr <= pageSize) {
            pageCount.value = 1;
         } else {
            pageCount.value =
               totalSortArr % pageSize == 0
                  ? totalSortArr / pageSize
                  : Math.ceil(totalSortArr / pageSize);
         }
         return;
      }

      pageCount.value =
         total % pageSize == 0 ? total / pageSize : Math.ceil(total / pageSize);

      sortedData.value = ORIGINAL_DATA; // no filtering, return original list
   });
   const cardArr = useComputed$(() => {
      const end = pageSize * pagObject.current;
      const start = end - pageSize;
      return sortedData.value.slice(start, end);
   });

   const handleChange = $((event: InputEvent) => {
      pagObject.current = 1;

      const input = event.target as HTMLInputElement;
      search.value = input.value;

      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set("page", pagObject.current.toString());
      urlParams.set("searchInputParam", search.value);
      navigate(`?${urlParams.toString()}`);
   });

   return (
      <div class={styles.wrapper}>
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
               <CardSmall data={cardArr.value} />
            </div>
         </section>

         <Pagination pagObject={pagObject}></Pagination>
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
