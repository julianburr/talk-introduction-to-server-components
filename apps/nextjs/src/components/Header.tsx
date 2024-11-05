import Icon from "feather-icons-react";

import { Form } from "@/components/Form";

type Props = {
  searchTerm?: string;
};

function Header({ searchTerm }: Props) {
  return (
    <div className="flex flex-col items-center sm:flex-row bg-red gap-2 sm:gap-8">
      <h1 className="font-brand ">Notflix</h1>
      <div className="p-3 rounded-md bg-gray-200 w-full flex flex-row items-center gap-2 focus-within:outline">
        <Icon icon="search" className="h-4" />
        <Form className="w-full">
          <input
            type="text"
            name="q"
            defaultValue={searchTerm}
            placeholder="Search movies..."
            className="w-full bg-transparent focus:outline-none"
            style={{ background: "transparent" }}
          />
        </Form>
      </div>
    </div>
  );
}

export { Header };
