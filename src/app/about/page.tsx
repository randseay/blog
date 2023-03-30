import PageWrap from '@components/PageWrap';
import TextLink from '@components/TextLink';

export default function About() {
  return (
    <PageWrap>
      <h1 className="mb-4 font-display text-3xl font-medium">About Me</h1>

      <p className="text-2xl font-light">
        I'm Rand Seay, a Senior Frontend Engineer with{' '}
        <TextLink href="https://dispel.com/">Dispel</TextLink>. I was formerly
        with Google Cloud at both{' '}
        <TextLink href="https://cloud.google.com/bigquery">BigQuery</TextLink>{' '}
        and <TextLink href="https://kaggle.com">Kaggle</TextLink>.
      </p>
    </PageWrap>
  );
}
