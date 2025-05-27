declare module '*.mdx' {
  let title: string;
  let published: string;
  let slug: string;
  let tags: string[];
  const MDXComponent: (props: any) => JSX.Element;
  export { title, published, slug, tags };
  export default MDXComponent;
}
