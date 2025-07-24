// components/UserActiveSwitch.tsx
"use client";

import { Switch } from "@/components/ui/switch";
import { useActiveUser } from "../../hooks/useActiveUser";

type Props = {
  id: number;
  isActive: boolean;
};

export default function UserActiveSwitch({ id, isActive }: Props) {
  const { activeUserHandler, isPending } = useActiveUser({ id });

  return <Switch checked={isActive} disabled={isPending} onCheckedChange={activeUserHandler} dir="ltr" />;
}
