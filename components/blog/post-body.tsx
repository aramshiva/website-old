import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    // <Balancer>
    <div className="max-w-2xl mx-auto">
      <article className="prose lg:prose-xl">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      </article>
    </div>
    // </Balancer>
  );
};

export default PostBody;