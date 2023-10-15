import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/posts-util";
const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export default PostDetailPage;
