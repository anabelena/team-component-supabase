"use client";

import { useEffect, useState } from "react";
import New from "./New";
import { DataTable } from "../Datatable";
import { columns } from "./Members/Columns/Columns";
import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";

export default function Team() {
  const [team, setTeam] = useState({
    id: "a382e1e5-a3db-4ea9-b331-ac5be3d72015",
  });

  const [members, setMembers] = useState<any>([
    // {
    //   name: "Belen Arista",
    //   email: "anabelen.aristah@gmail.com",
    //   role: "admin",
    //   status: "active",
    //   age:40,
    // },
    // {
    //   name: "Karlos Torrico",
    //   email: "karlos@gmail.com",
    //   role: "manager",
    //   status: "pending",
    //   age:40,
    // },
    // {
    //   name: "Edward Arista",
    //   email: "edwardarista@gmail.com",
    //   role: "member",
    //   status: "removed",
    //   age:40,
    // },
    // {
    //   name: "Gabriela Barrios",
    //   email: "gabriela@gmail.com",
    //   role: "member",
    //   status: "active",
    //   age:40,
    // },
    // {
    //   name: "Alejandra Arista",
    //   email: "alejandra@gmail.com",
    //   role: "member",
    //   status: "removed",
    //   age:40,
    // },
  ]);

  const { loading, setLoading } = useHelpers();

  const fetchTeam = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("teams")
        .select("*,team_members(*)")
        .eq("id", "a382e1e5-a3db-4ea9-b331-ac5be3d72015");

      if (data) {
        console.log("info", data);
        // const { team_members, ...teamData } = data;
        // setTeam(teamData);
        // setMembers(team_members);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px] ">
      <header className="flex items-center justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl"> Team </h1>
          <p> Invite new members in your team.</p>
        </div>
        {/* <New /> */}
      </header>
      <main>
        <DataTable columns={columns} data={members} />
      </main>
    </div>
  );
}
