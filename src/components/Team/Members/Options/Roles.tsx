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
}) 
  
{

  console.log(selected)

  return (
    <Select defaultValue={selected}  onValueChange={setSelected}>
      <SelectTrigger className="w-full capitalize">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {ROLES.map((role)=>(
             <SelectItem key={role} value={role} className="capitalize data-[state=checked]:bg-gray-300">{role}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
