"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import Options from "../Options";
import RoleCell from "./RoleCell";
import { TUser } from "@/types/table";

export const columns: ColumnDef<TUser>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const email: string = row.original.email;
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-black text-white font-bold capitalize w-8 h-8 rounded-full">
            {name[0]}
          </div>
          <div className="grid">
            <span className="font-medium">{name}</span>
            <span className="text-xs text-neutral-600">{email}</span>
          </div>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    header: "Role",
    accessorKey: "role",
    cell: ({ row }) => <RoleCell row={row} />,
    enableSorting: true,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      switch (status) {
        case "pending":
          return (
            <Badge className="hover:bg-transparent capitalize bg-orange-50 text-orange-900">
              Pending
            </Badge>
          );
        case "active":
          return (
            <Badge className="hover:bg-transparent capitalize bg-green-50 text-green-900">
              Active
            </Badge>
          );
        case "removed":
          return (
            <Badge className="hover:bg-transparent capitalize bg-red-50 text-red-900">
              Removed
            </Badge>
          );
        default:
          return (
            <Badge className="capitalize bg-neutral-100 text-neutral-600">
              Unknown
            </Badge>
          );
      }
    },
  },
  {
    //id is unique when there's no accesorkey
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex justify-center">
          <Options user={user} />
        </div>
      );
    },
  },
];
