import { create } from 'zustand'

export const useFileExplorerSandpack = create(() => ({
  status: 'initial' as SandpackStatus,
  files: {
    "/index.tsx": {
      code: ""
    },
    "/src/app.tsx": {
      code: ""
    },
    "/src/components/button.tsx": {
      code: ""
    },
    "/package.json": {
      code: "{\n  \"name\": \"sandpack-project\",\n  \"main\": \"/index.tsx\",\n  \"dependencies\": {},\n  \"devDependencies\": {}\n}"
    }
  } as Record<string, SandpackFile>,
  activeFile: "/index.tsx",
  visibleFilesFromProps: [
    "/index.tsx",
    "/src/app.tsx",
    "/src/components/button.tsx"
  ],
}))

// sandpack: {
//   status,
//   updateFile,
//   deleteFile,
//   activeFile,
//   files,
//   openFile,
//   visibleFilesFromProps,
// },

export interface SandpackFile {
  code: string;
  hidden?: boolean;
  active?: boolean;
  readOnly?: boolean;
}

export interface SandpackBundlerFile {
  code: string;
  hidden?: boolean;
  active?: boolean;
  readOnly?: boolean;
}

export type SandpackFiles = Record<string, string | SandpackFile>;
export declare type SandpackBundlerFiles = Record<string, SandpackBundlerFile>;
export type SandpackStatus =
  | "initial"
  | "idle"
  | "running"
  | "timeout"
  | "done";


export interface UseSandpackProps {
  status: SandpackStatus;
  visibleFiles: string[];
  updateFile: (
    pathOrFiles: string | SandpackFiles,
    code?: string,
    shouldUpdatePreview?: boolean
  ) => void;

  deleteFile: (path: string, shouldUpdatePreview?: boolean) => void;

  /**
   * Use this to set a file as active by default in the editor component.
   * It defaults to the main file from a given template.
   */
  activeFile?: string;

  files: SandpackBundlerFiles;
  openFile: (path: string) => void;
}



// {
//   "status": "initial",
//   "activeFile": "/index.tsx",
// "files": {
//   "/index.tsx": {
//     "code": ""
//   },
//   "/src/app.tsx": {
//     "code": ""
//   },
//   "/src/components/button.tsx": {
//     "code": ""
//   },
//   "/package.json": {
//     "code": "{\n  \"name\": \"sandpack-project\",\n  \"main\": \"/index.tsx\",\n  \"dependencies\": {},\n  \"devDependencies\": {}\n}"
//   }
// },
//   "visibleFilesFromProps": [
//     "/index.tsx",
//     "/src/app.tsx",
//     "/src/components/button.tsx"
//   ]
// }