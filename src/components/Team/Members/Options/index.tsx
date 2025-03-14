"use client";

import { useHelpers } from "@/hooks/useHelpers";
import { EllipsisVertical, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Remove from "./Remove";

export default function Options({ user }: any) {
  
  const { open = false, setOpen, selected, setSelected } = useHelpers();

  const menu = [
    {
      key: "remove",
      title: "Remove member",
      icon: <UserX className="w-[20px]" />,
    },
  ];

  return (
    <div>
      <Remove 
        {...{
          user,
          open: selected === "remove",
          onClose: () => setSelected(undefined),
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical className="w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuGroup>
            {menu.map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="flex gap-2 cursor-pointer"
                  onClick={() => setSelected(item.key)} //when click selected = "remove"
                >
                  {item.icon}
                  <span className="capitalize">{item.title}</span>
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
