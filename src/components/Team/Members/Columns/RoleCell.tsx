import { useHelpers } from "@/hooks/useHelpers";
import { TUser } from "@/types/table";
import { Row } from "@tanstack/react-table";
import Roles from "../Options/Roles";

export default function RoleCell({ row }: { row: Row<TUser> }) {
  const { open, setOpen, loading, setLoading } = useHelpers();

  const role: string = row.getValue("role");

  const onRoleChanged = (v: string) => {
    try {
      setLoading(true);
      alert(v);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <div onClick={() => setOpen(!open)} className="w-[120px]">
      {!open && (
        <span className="text-sm text-neutral-500 capitalize">{role}</span>
      )}
      {open && <Roles selected={role} setSelected={(v) => onRoleChanged(v)} />}
    </div>
  );
}
