import { Inter } from "next/font/google";
import Auth from "./Components/Auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Auth />
    </main>
  );
}
