"use client";

import { useEffect, useState } from "react";
import New from "./New";
import { DataTable } from "../Datatable";
import { columns } from "./Members/Columns/Columns";
import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";
import LoadingTeam from "../Loading/Team";

export default function Team() {
  const [team, setTeam] = useState({
    name:"Team",
    id: "a382e1e5-a3db-4ea9-b331-ac5be3d72015",
  });

  const [members, setMembers] = useState<any>([]);

  const { loading, setLoading } = useHelpers();

  const fetchTeam = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("teams")
        .select("*,team_members(*)")
        .eq("id", "a382e1e5-a3db-4ea9-b331-ac5be3d72015")
        .single();

      if (error) {
        console.log("Supabase error", error);
      }

      if (data) {
        console.log("Data Supabase", data);
        const { team_members, ...teamData } = data;
        setTeam(teamData);
        setMembers(team_members);
      }
    } catch (err) {
      console.log("Unexpected error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
    // Listen to inserts
    const subscription = supabase
      .channel("todos")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "team_members",
          filter: `team_id=eq.${team.id}`,
        },
        () => {
          fetchTeam();
        }
      )
      .subscribe();
  }, []);


  if (loading) return <LoadingTeam/>


  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px] ">
      <header className="flex items-center justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl"> {team.name || "Team"} </h1>
          <p> Invite new members in your team.</p>
        </div>
        <New team_id={team.id} />
      </header>
      <main>
        <DataTable columns={columns} data={members} />
      </main>
    </div>
  );
}
