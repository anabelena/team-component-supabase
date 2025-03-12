import { useHelpers } from "@/hooks/useHelpers";
import { TUser } from "@/types/table";
import { Row } from "@tanstack/react-table";
import Roles from "../Options/Roles";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export default function RoleCell({ row }: { row: Row<TUser> }) {
  
  const { open, setOpen, loading, setLoading } = useHelpers();

  const role: string = row.getValue("role");
  const id: string = row.original.id;

  const onRoleChanged = async (v: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("team_members")
        .update({ role: v })
        .eq("id", id)
        .select("*");

      if (error) {
        console.log("Error Supabase Insert", error);
      }

      if (data) {
        console.log(data);
        toast.success("Role updated successfully");
      }
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <div onClick={() => setOpen(!open)} className="w-[120px]">
      {!open && (
        <span className="text-sm text-neutral-600 capitalize">{role}</span>
      )}
      {open && <Roles selected={role} setSelected={(v) => onRoleChanged(v)} />}
    </div>
  );
}
