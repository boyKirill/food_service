import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ json }) => {
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
   json(200, dataAllRestaurants);
};
