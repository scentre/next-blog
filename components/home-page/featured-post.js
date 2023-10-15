import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>featured posts</h2>

      <PostGrid posts={posts} />
    </section>
  );
}
export default FeaturedPosts;
