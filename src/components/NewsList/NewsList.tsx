import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
