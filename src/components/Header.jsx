import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-gray-800 h-16 flex items-center justify-center">
      <Link href={"/"}>
        <h1 className="text-3xl text-white">Header</h1>
      </Link>
    </div>
  );
};

export default Header;
