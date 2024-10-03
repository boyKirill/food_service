import {
   $,
   component$,
   useComputed$,
   useSignal,
   useTask$,
   useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useLocation, useNavigate } from "@builder.io/qwik-city";
import styles from "./search.module.css";
import type { Data } from "~/routes/api/searchrest";
import Menu from "~/components/Menu/menu";
import CardSmall from "~/components/CardSmall/cardSmall";
import Pagination from "~/components/Pagination/pagination";

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

const getPageCount = (total: number, size: number) => {
   return total % size == 0 ? total / size : Math.ceil(total / size);
};

export default component$(() => {
   const { dataCard } = useData().value;
   let { pageSize, total } = useData().value;
   const { page } = useData().value;
   const ORIGINAL_DATA = dataCard;
   const sortedData = useSignal([]);
   const search = useSignal<string>("");

   const location = useLocation();
   const urlParams = location.url.searchParams;

   const pageCount = useSignal<number>();
   const currentPage = useSignal<number>(1);

   const navigate = useNavigate();

   if (ORIGINAL_DATA.value === null) {
      return <>Error</>;
   }

   pageSize = pageSize ? pageSize : 10;
   total = total ? total : ORIGINAL_DATA.length;

   useTask$(() => {
      const current = urlParams.get("page");
      if (!current) {
         currentPage.value = page ? page : 1;
         pageCount.value = getPageCount(total, pageSize);
         urlParams.set("pageCount", pageCount.value.toString());
         urlParams.set("pageSize", pageSize.toString());
         urlParams.set("page", currentPage.value.toString());
      }
   });

   useTask$(({ track }) => {
      track(() => location.url.search);
      const urlParams = new URLSearchParams(location.url.search);

      const current = Number(urlParams.get("page"))
         ? Number(urlParams.get("page"))
         : 1;
      currentPage.value = current;
   });

   // eslint-disable-next-line qwik/no-use-visible-task
   useVisibleTask$(() => {
      const searchInputParam = urlParams.get("searchInputParam");
      if (searchInputParam) {
         search.value = searchInputParam;
      }
      navigate(`?${urlParams.toString()}`);
   });

   useTask$(({ track }) => {
      track(() => search.value);

      const searchParam = search.value.toLocaleLowerCase().trim();

      if (searchParam.length > 0) {
         sortedData.value = ORIGINAL_DATA.filter((e: Data) =>
            e.name.toLocaleLowerCase().includes(searchParam)
         );
         return;
      }

      sortedData.value = ORIGINAL_DATA; // no filtering, return original list
   });

   useTask$(({ track }) => {
      track(() => sortedData.value);

      const total = sortedData.value.length;

      pageCount.value = getPageCount(total, pageSize);

      if (currentPage.value > pageCount.value) {
         currentPage.value = pageCount.value;
      }
      if (currentPage.value < 1) {
         currentPage.value = 1;
      }
      urlParams.set("pageCount", pageCount.value.toString());
      urlParams.set("pageSize", pageSize.toString());
      urlParams.set("page", currentPage.value.toString());

      navigate(`?${urlParams.toString()}`);
   });
   const cardArr = useComputed$(() => {
      const end = pageSize * currentPage.value;
      const start = end - pageSize;
      return sortedData.value.slice(start, end);
   });

   const handleChange = $((event: InputEvent) => {
      const input = event.target as HTMLInputElement;
      search.value = input.value;
      currentPage.value = 1;
      urlParams.set("page", currentPage.value.toString());
      urlParams.set("searchInputParam", search.value);
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
         {cardArr.value.length > 0 && (
            <div class={[styles.container]}>
               <section class={styles.found_products_container}>
                  <h2>Top Restaurants</h2>
                  <div class={styles.found_products}>
                     <CardSmall data={cardArr.value} />
                  </div>
               </section>
               <Pagination></Pagination>
            </div>
         )}

         {cardArr.value.length <= 0 && (
            <div class={[styles.container, styles.nothing_found]}>
               Ничего не найдено
            </div>
         )}

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
