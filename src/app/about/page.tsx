import PageWrap from '@components/PageWrap';
import TextLink from '@components/TextLink';

export default function About() {
  return (
    <PageWrap>
      <h1 className="mb-4 font-display text-3xl font-medium">About me</h1>

      <p className="mb-4 text-2xl font-light">
        I'm Rand Seay, a Senior Frontend Engineer with{' '}
        <TextLink href="https://dispel.com/">Dispel</TextLink>. I was formerly
        with Google Cloud at both{' '}
        <TextLink href="https://cloud.google.com/bigquery">BigQuery</TextLink>{' '}
        and <TextLink href="https://kaggle.com">Kaggle</TextLink>.
      </p>

      <p className="mb-8 text-2xl font-light">
        My wife and I and our three kids are in the greater Portland area, and
        love the Pacific Northwest. I enjoy woodworking, cooking, and playing
        basketball.
      </p>

      <h1 className="mb-4 font-display text-3xl font-medium">
        How I got started
      </h1>

      <p className="mb-4 text-2xl font-light"></p>
    </PageWrap>
  );
}
