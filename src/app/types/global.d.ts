declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
      React.ComponentProps<"svg"> & { title?: string }
  >;
  export default ReactComponent;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.avif";

declare const __API__: string
declare const __IS_DEV__: boolean
declare const __PROJECT__: 'storybook' | "jest" | "frontend"