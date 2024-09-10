import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-[500px]">
      {" "}
      this is the page.js
      <Link href={"/dashboard"}>
        <button className="bg-red-500 "> click</button>
      </Link>
    </div>
  );
}
