import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FetchUserBySlug } from "../hooks/useQueries";
import { DialogMinify } from "@/components/ui/dialog/DialogMinify";
import { RenderState } from "@/components/wrappers/RenderState";
import EditUserForm from "./form/edit-user-form";
import { FileEditIcon } from "lucide-react";

type EditUserProps = {
  slug: string;
  id: number;
};

export default function EditUser({ slug, id }: EditUserProps) {
  const { data, isPending, error } = FetchUserBySlug(slug);

  const [open, setOpen] = useState(false);

  return (
    <DialogMinify
      button={
        <Button className="w-full flex justify-between p-2 h-8" variant="ghost">
          <FileEditIcon />
          ویرایش
        </Button>
      }
      description="تغییرات را اعمال کنید و بعد از اتمام بر روی دکمه ذخیره کلیک کنید"
      title="ویرایش کاربر"
      open={open}
      setOpen={setOpen}
    >
      <RenderState isPending={isPending} error={error} data={data?.data}>
        <EditUserForm id={id} email={data?.data?.email as string} name={data?.data?.name as string} setOpen={setOpen} />
      </RenderState>
    </DialogMinify>
  );
}
