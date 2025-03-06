import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ROLES = ["admin", "manager", "member"] as const;

export default function Roles({
  selected = "member",
  setSelected,
}: {
  selected?: string;
  setSelected?: (value: string) => void;
}) {
  return (
    <Select defaultValue={selected}  onValueChange={setSelected}>
      <SelectTrigger className="w-full capitalize">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {ROLES.map((role)=>(
             <SelectItem key={role} value={role} className="capitalize hover:bg-gray-100 data-[state=checked]:bg-gray-300">{role}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
