import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import style from "./Post.module.scss";

export const Post = ({ post }) => {
  const [active, setActive] = useState(false);

  const stylePost = active ? `${style.Post} ${style.Active}` : style.Post;
  return (
    <li className={stylePost} onClick={() => setActive(!active)}>
      <div className={style.Title}>
        <span>
          {post.id}. {post.title}
        </span>
        <HiPlus />
      </div>
      <div className={style.Body}>{post.body}</div>
    </li>
  );
};
