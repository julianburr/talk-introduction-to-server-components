"use client";

import { useRouter } from "next/navigation";
import { HTMLProps, PropsWithChildren } from "react";

function Form({
  children,
  ...props
}: PropsWithChildren<HTMLProps<HTMLFormElement>>) {
  const router = useRouter();
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();

        const values: any = {};
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
          values[key] = value;
        }
        router.push(`?${new URLSearchParams(values)}`);
      }}
      {...props}
    >
      {children}
    </form>
  );
}

export { Form };
