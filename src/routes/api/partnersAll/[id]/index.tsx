import {type RequestHandler } from "@builder.io/qwik-city";
export interface dataCardFood {
  id:number;
  imageSrc: string;
  name: string;
  place: string;
  mark: number;
  ratingsNum: number;
  waiting_time: number;
  kitchensArr: string[];
  order_type: string;
  imagesArr:string[];
}
export const onGet: RequestHandler = async ({ json, params }) => {
  const { id } = params; // Получаем id из параметров маршрута

  /*для imagesArr беру картинки из другого места, так как из partnersAll картинки другого формата(вертикальные)*/
  const dataPartnersAll: dataCardFood[] = [
      {
        id:1,
        imageSrc: "/partnersAll/bg1.png",
        name: "Tacos Nanchas",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:367,
        kitchensArr: ["Chinese", "American"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp5.png",
        ]
      },
      {
        id:2,
        imageSrc: "/partnersAll/bg2.png",
        name: "McDonald's",
        place: "Hay street , Perth City",
        mark: 4.6,
        ratingsNum:267,
        kitchensArr: ["Chinese", "American"],
        waiting_time: 26,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp2.png",
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
        ]
      },
      {
        id:3,
        imageSrc: "/partnersAll/bg3.png",
        name: "KFC Foods",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:467,
        kitchensArr: ["Chinese", "American", "Deshi food", "Chinese"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:4,
        imageSrc: "partnersAll/bg4.png",
        name: "Cafe MayField’s",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:1067,
        kitchensArr: ["Chinese", "American"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp4.png",
          "/searchRest/sp3.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:5,
        imageSrc: "/partnersAll/bg2.png",
        name: "Mario Italiano",
        place: "Hay street , Perth City",
        mark: 4.6,
        ratingsNum:367,
        kitchensArr: ["Chinese", "American", "Deshi food"],
        waiting_time: 26,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:6,
        imageSrc: "/partnersAll/bg6.png",
        name: "Krispy Creme",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:367,
        kitchensArr: ["Chinese"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:7,
        imageSrc: "/partnersAll/bg1.png",
        name: "Tacos Nanchas",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:367,
        kitchensArr: ["Chinese"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:8,
        imageSrc: "/partnersAll/bg2.png",
        name: "Mario Italiano",
        place: "Hay street , Perth City",
        mark: 4.6,
        ratingsNum:367,
        kitchensArr: ["Chinese", "American", "Deshi food", "Chinese"],
        waiting_time: 26,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
      {
        id:9,
        imageSrc: "/partnersAll/bg3.png",
        name: "Krispy Creme",
        place: "St Georgece Terrace, Perth",
        mark: 4.5,
        ratingsNum:367,
        kitchensArr: ["Chinese", "American"],
        waiting_time: 25,
        order_type: "Free delivery",
        imagesArr:[
          "/searchRest/sp3.png",
          "/searchRest/sp4.png",
          "/searchRest/sp6.png",
          "/searchRest/sp1.png",
          "/searchRest/sp2.png",
        ]
      },
    ];

   // Ищем элемент по id
   const partner = dataPartnersAll.find((p) => p.id === parseInt(id));
   if (partner) {
     json(200, partner); // Возвращаем найденный элемент
   } else {
     json(404, { error: "Partner not found" }); // Возвращаем ошибку, если элемент не найден
   }
};
