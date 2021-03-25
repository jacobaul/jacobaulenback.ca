import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <div class='entry'>
    <a href={ link}>
      <HeadPost meta={meta} />
      <Link href={ link}>
        <a>Read more &rarr;</a>
      </Link>
      
    </a>
    </div>
  );
};
