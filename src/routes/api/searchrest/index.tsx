import { type RequestHandler } from "@builder.io/qwik-city";

export interface Data {
   imageSrc: string;
   name: string;
   price_range: number;
   kitchensArr: string[];
   key?: string;
}

export const onGet: RequestHandler = async ({ json }) => {
   /* const kitchenArr = [
      "Chinese",
      "American",
      "Deshi food",
      "Chinese",
      "American",
      "Deshi food",
   ];
   const imageSrcs = [
      "/searchRest/sp1.png",
      "/searchRest/sp2.png",
      "/searchRest/sp3.png",
      "/searchRest/sp4.png",
      "/searchRest/sp5.png",
      "/searchRest/sp6.png",
   ]; */
   const dataAllRestaurants: Data[] = [
      {
         imageSrc: "/searchRest/sp1.png",
         name: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp1.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The Halal Guys",
         price_range: 1,
         kitchensArr: ["Chinese"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American", "American", "American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp2.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American", "American", "American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "Pop",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "Pop",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "Pop",
         price_range: 4,
         kitchensArr: ["American"],
      },
      {
         imageSrc: "/searchRest/sp3.png",
         name: "The ",
         price_range: 4,
         kitchensArr: ["American", "American", "American"],
      },
   ];

   /* const dataAllRestaurants1 = Array.from(
      { length: 50 },
      (_element, index) => ({
         imageSrc:
            imageSrcs[
               Math.floor(0 + Math.random() * (imageSrcs.length - 1 + 1 - 0))
            ],
         name: kitchenArr[Math.floor(0 + Math.random() * 5)],
         price_range: Math.floor(1 + Math.random() * (5 + 1 - 1)),
         kitchensArr: [`${kitchenArr[Math.floor(0 + Math.random() * 5)]}`],
      })
   ); */

   json(200, {
      page: 4,
      pageSize: 50,
      total: dataAllRestaurants.length,
      dataCard: dataAllRestaurants,
   });
};
