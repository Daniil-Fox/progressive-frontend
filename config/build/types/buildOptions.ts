export type Mode = "development" | "production";

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type BuildOptions = {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest"
};

export type EnvOptions = {
  port: number;
  mode: Mode;
  apiUrl: string;
};
