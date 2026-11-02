import { redirect } from "next/navigation";

/** Team lives on About — keep old URL working. */
export default function TeamPage() {
  redirect("/about#team");
}
