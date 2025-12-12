import { Sandpack, type SandpackFiles } from '@codesandbox/sandpack-react';

export default function Editor({ files }: { files: SandpackFiles }) {
  return (
    <div className="xl:-mx-20 mx-0">
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
