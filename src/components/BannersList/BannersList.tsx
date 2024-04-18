import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import BannerNews from "../BannerNews/BannerNews";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <BannerNews key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const NewsBannerWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);

export default NewsBannerWithSkeleton;
