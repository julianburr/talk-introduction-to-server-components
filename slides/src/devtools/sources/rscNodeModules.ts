export const rscNodeModules = [
  {
    icon: "cloud",
    label: "localhost:3000",
    items: [
      { icon: "folder", label: "src/components" },
      {
        icon: "folder",
        label: "node_modules",
        focused: true,
        items: [
          { icon: "folder", label: "@swc/helper/esm", focused: true },
          { icon: "folder", label: "localstorage-slim", focused: true },
          { icon: "folder", label: "next", focused: true },
        ],
      },
    ],
  },
];
