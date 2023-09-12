import { redirect } from "next/navigation";
import NotFoundPage from "../components/pages/404";

export default async function NotFound() {
    return (
      <>
        <NotFoundPage/>
      </>
    )
}