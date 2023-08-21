import { Post } from "../UI/Post/Post";
import style from "./ListPosts.module.scss";

export const ListPosts = ({ posts, addPosts }) => {
  return (
    <div className="container">
      <ul className={style.List}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <div onClick={addPosts} className={style.SeeMore}>
          see more
        </div>
      </ul>
    </div>
  );
};
