import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProductDetails = routeLoader$(async () => {
   const res = await fetch("http://localhost:5173/api/partners/");
   console.log(res);
   const product = await res.json();
   return product as Product[];
});

export const useAllRest = routeLoader$(async () => {
   const res = await fetch("http://localhost:5173/api/allrest/");
   console.log(res);
   const rest = await res.json();
   return rest as Resturant[];
});

interface Product {
   id: number;
   name: string;
   description: string;
}

export default component$(() => {
   const signal = useProductDetails();
   const signalALlRest = useAllRest();
   console.log(signal.value);
   console.log(signalALlRest.value);

   return (
      <div>
         {signal.value.map((item) => (
            <div>
               <p>Product name: {item.imageSrc}</p>
               <p>Product name: {item.name}</p>
               <p>Product name: {item.place}</p>
            </div>
         ))}
         <br />
         <br />
         <br />
         {signalALlRest.value.map((item) => (
            <div>
               <p>Product name: {item.imageSrc}</p>
               <p>Product name: {item.name}</p>
               <p>Product name: {item.place}</p>
            </div>
         ))}
      </div>
   );
});
