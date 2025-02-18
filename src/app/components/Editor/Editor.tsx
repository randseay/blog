import { type SandpackFiles, Sandpack } from '@codesandbox/sandpack-react';

export default function Editor({ files }: { files: SandpackFiles }) {
  return (
    <div className="mx-0 xl:-mx-20">
      <Sandpack
        files={files}
        template="react-ts"
        theme="dark"
        options={{
          editorHeight: 500,
          showTabs: true,
          showConsole: true,
          showConsoleButton: true,
          showLineNumbers: true,
        }}
      />
    </div>
  );
}
