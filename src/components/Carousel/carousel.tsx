import { component$, useSignal } from "@builder.io/qwik";
import styles from "./carousel.module.css";

interface itemProps {
  contentOfSlides: string[];
}

const generateUniqueId = () =>
  `slide-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export default component$<itemProps>((props) => {
  // Создаем массив уникальных идентификаторов для каждого слайда
  const slideIds = useSignal(
    props.contentOfSlides.map(() => generateUniqueId()),
  );

  return (
    <div class={styles.carousel_container}>
      <div class={styles.carousel}>
        {props.contentOfSlides.map((item, index) => (
          <div
            id={slideIds.value[index]}
            class={styles.slide}
            key={slideIds.value[index]}
          >
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div class={styles.pagination}>
        <div class={styles.pagination_container}>
          {props.contentOfSlides.map((_, index) => (
            <a
              class={styles.pagination_link}
              href={`#${slideIds.value[index]}`}
              key={slideIds.value[index]}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
});
