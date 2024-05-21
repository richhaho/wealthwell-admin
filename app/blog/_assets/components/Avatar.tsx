import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { ArticleProps } from "@/types/ArticleProps";
// This is the author avatar that appears in the article page and in <CardArticle /> component
interface AvatarProps {
  article: ArticleProps;
}
const Avatar: FC<AvatarProps> = ({ article }) => {
  return (
    <Link
      href={`/blog/author/${article.author.slug}`}
      title={`Posts by ${article.author.name}`}
      className="inline-flex items-center gap-2 group"
      rel="author"
    >
      <span itemProp="author">
        <Image
          src={article.author.avatar}
          // alt={`Avatar of ${article.author.name}`}
          alt=""
          className="w-7 h-7 rounded-full object-cover object-center"
          width={28}
          height={28}
        />
      </span>
      <span className="group-hover:underline">{article.author.name}</span>
    </Link>
  );
};

export default Avatar;
