import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");

  /* local storage'da kullanıcı ismi varsa sonraki sayfaya redirect---------------------------------------------- */
  const router = useRouter();
  useEffect(() => {
    const localName = localStorage.getItem("username");
    if (localName) {
      router.push("/todos");
    }
  }, []);

  /* submit username to local storage---------------------------------------------- */
  const handleSubmit = () => {
    localStorage.setItem("username", username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
      <label className="self-start p-2 text-white" htmlFor="username">
        Username
      </label>
      <input
        className="p-2 border-2"
        placeholder="Username"
        type="text"
        minLength={3}
        required={true}
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 p-2 text-white border-2 rounded-md m-4"
        type="submit"
      >
        Submit
      </button>
      <Link href="/todos">
        <a className="text-blue-500">Go to todos</a>
      </Link>
    </form>
  );
};
