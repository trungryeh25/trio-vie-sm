// import { UserRole } from "../../../../packages/shared/src/types";
import { UserRole } from "@shared/types";
export default function Home() {
  const role: UserRole = "ADMIN";
  return (
    <main>
      <h1>Hello, World!</h1>
      <p>Your role is: {role}</p>
    </main>
  );
}