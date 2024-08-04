import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ json }) => {
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
   json(200, dataTeamRestaurants);
};
