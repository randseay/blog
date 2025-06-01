declare module '*.mdx' {
  export const title: string;
  export const published: string;
  export const author: string;
  export const slug: string;
  export const tags: string[];
  export const summary: string;
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
