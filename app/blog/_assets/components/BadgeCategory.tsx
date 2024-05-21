import Link from "next/link";
import { FC } from "react";
interface BadgeCategory{
  category : {
    slug:string;
    title:string;
    titleShort:string;
  },
  extraStyle?: string;
}

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category: FC<BadgeCategory> = ({ category, extraStyle }) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`badge badge-sm md:badge-md hover:badge-primary ${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      {category.titleShort}
    </Link>
  );
};

export default Category;
