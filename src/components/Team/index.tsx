"use client";

import { useState } from "react";
import New from "./New";
import { DataTable } from "../Datatable";
import { columns } from "./Members/Columns/Columns";

export default function Team() {
  const [members, setMembers] = useState<any>([
    {
      name: "Belen Arista",
      email: "anabelen.aristah@gmail.com",
      role: "admin",
      status: "active",
    },
    {
      name: "Karlos Torrico",
      email: "karlos@gmail.com",
      role: "manager",
      status: "pending",
    },
    {
      name: "Edward Arista",
      email: "edwardarista@gmail.com",
      role: "member",
      status: "removed",
    },
    {
      name: "Gabriela Barrios",
      email: "gabriela@gmail.com",
      role: "member",
      status: "active",
    },
    {
      name: "Alejandra Arista",
      email: "alejandra@gmail.com",
      role: "member",
      status: "removed",
    },
  ]);

  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px] ">
      <header className="flex items-center justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl"> Team </h1>
          <p> Invite new members in your team.</p>
        </div>
        <New />
      </header>
      <main>
        <DataTable columns={columns} data={members} />
      </main>
    </div>
  );
}
