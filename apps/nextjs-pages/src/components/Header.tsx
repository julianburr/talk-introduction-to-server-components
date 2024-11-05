import Icon from "feather-icons-react";

type Props = {
  searchTerm?: string;
  setSearchTerm?: (value: string) => any;
};

function Header({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="flex flex-col items-center sm:flex-row bg-red gap-2 sm:gap-8">
      <h1 className="font-brand ">Notflix</h1>
      <div className="p-3 rounded-md bg-gray-200 w-full flex flex-row items-center gap-2 focus-within:outline">
        <Icon icon="search" className="h-4" />
        <input
          type="text"
          name="q"
          defaultValue={searchTerm}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              setSearchTerm?.(e.target?.value);
            }
          }}
          placeholder="Search movies..."
          className="w-full bg-transparent focus:outline-none"
          style={{ background: "transparent" }}
        />
      </div>
    </div>
  );
}

export { Header };
