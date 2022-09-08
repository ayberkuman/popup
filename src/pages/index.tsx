import { useRouter } from "next/router";
import { Login } from "../components/Login";

export default function Home({}) {
  const router = useRouter();
  const push = () => {
    router.push("/todos");
  };
  return (
    <div className="container p-4 flex justify-center items-center min-h-screen">
      <Login />
    </div>
  );
}
