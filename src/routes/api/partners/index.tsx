import { type RequestHandler } from "@builder.io/qwik-city";
export interface dataCardMedium {
  imageSrc: string;
  name: string;
  place: string;
  mark: number;
  waiting_time: number;
  order_type: string;
  key?: string;
}
export const onGet: RequestHandler = async ({ json }) => {
  const dataPartners: dataCardMedium[] = [
    {
      imageSrc: "/fp1.png",
      name: "Krispy Creme",
      place: "St Georgece Terrace, Perth",
      mark: 4.5,
      waiting_time: 25,
      order_type: "Free delivery",
    },
    {
      imageSrc: "/fp2.png",
      name: "Mario Italiano",
      place: "Hay street , Perth City",
      mark: 4.6,
      waiting_time: 26,
      order_type: "Free delivery",
    },
    {
      imageSrc: "/fp1.png",
      name: "Krispy Creme",
      place: "St Georgece Terrace, Perth",
      mark: 4.5,
      waiting_time: 25,
      order_type: "Free delivery",
    },
  ];
  json(200, dataPartners);
};
