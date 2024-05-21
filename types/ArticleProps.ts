import marcImg from '@/app/blog/_assets/images/authors/marc.png';
import { ReactNode } from 'react';
export type CategoryItem = {
  slug: string;
  title: string;
  titleShort: string;
  description: string;
  descriptionShort:string;
}
export type ArticleProps = {
  slug?:  string;
  name?: string;
  avatar?: string;
  title?: string; 
  description?: string;
  publishedAt : string;
  author: {
      slug:  string;
      name: string;
      avatar: string;
      title?: string;
      description?: string;
    },
  image:{
      alt?: string ;
      src?: string | any;
      urlRelative?: string;
    },
  categories: CategoryItem[];
  content?: ReactNode;
}
