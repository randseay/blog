export function EditorForRSS(props: {
  files: Record<string, string> | undefined;
}) {
  const files = props.files || {};

  return (
    <>
      {Object.entries(files).map(([filename, content]) => (
        <div key={filename}>
          <h4>{filename}</h4>
          <pre>
            <code>{content}</code>
          </pre>
        </div>
      ))}
    </>
  );
}
