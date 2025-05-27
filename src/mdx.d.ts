declare module '*.mdx' {
  let title: string;
  let published: string;
  let slug: string;
  const MDXComponent: (props: any) => JSX.Element;
  export { title, published, slug };
  export default MDXComponent;
}
