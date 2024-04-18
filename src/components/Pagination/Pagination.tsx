import { useTheme } from "../../context/ThemeContext";
import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePastPage,
  handlePageClick,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        onClick={handlePastPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= 10}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
