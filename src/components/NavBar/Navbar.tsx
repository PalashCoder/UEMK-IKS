import navdata from "@/data/navData";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <section className="flex justify-between p-10">
      <div className="max-md:hidden">UEMK Logo</div>
      <div className="flex gap-10 max-md:hidden">
        {navdata.map((data) => (
          <Link href={data.path} key={data.path}>
            {data.title}
          </Link>
        ))}
      </div>
      <MobileNav />
      <div>Observatory Logo</div>
    </section>
  );
};

export default Navbar;
