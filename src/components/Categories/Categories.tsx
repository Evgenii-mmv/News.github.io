import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setPickCategories: (category: CategoriesType | null) => void;
  pickCategories: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setPickCategories, pickCategories }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setPickCategories(null)}
          className={!pickCategories ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setPickCategories(category)}
              className={
                pickCategories === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
