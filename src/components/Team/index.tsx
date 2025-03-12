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

  const [members, setMembers] = useState<any>([]);

  const { loading, setLoading } = useHelpers();

  const fetchTeam = async () => {
    try {
      setLoading(true)
      
      const { data, error }:any = await supabase
        .from("teams")
        .select("*,team_members(*)")
        .eq("id", "a382e1e5-a3db-4ea9-b331-ac5be3d72015")
        .single()

     
      if (data) {
        console.log('Data API',data)
        const {team_members,...teamData} = data
        setTeam(teamData)
        setMembers(team_members)
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

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
