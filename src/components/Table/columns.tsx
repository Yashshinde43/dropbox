// "use client";

import { ColumnDef } from "@tanstack/react-table";
import { FileType } from "../../../typing";
import prettyBytes from "pretty-bytes";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "filename",
    header: "filename",
  },
  {
    accessorKey: "timestamp",
    header: "Data Added",
  },
  {
    accessorKey: "size",
    header: "size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      const url = renderValue() as string;
      if (url){
        return (
          <a
          href={url}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-600"
          >
          Download
        </a>
      );
    }
    },
  },
];
