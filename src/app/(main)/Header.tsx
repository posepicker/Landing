import MenuContent from "@/data/Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1>
        <Link href="/">PosePicker</Link>
      </h1>
      <nav className="flex">
        {MenuContent.map((menu) => (
          <li
            key={menu.page}
            className="flex relative justify-center px-4 items-center group cursor-pointer w-20">
            {"detail" in menu ? (
              <>
                <h5>{menu.page}</h5>
                <div className="w-24 absolute top-16 hidden group-hover:block bg-slate-400 rounded text-center">
                  {menu.detail.map((detail) => (
                    <Link
                      key={detail.page}
                      href={detail.link}
                      className="hover:text-white">
                      <h5>{detail.page}</h5>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link href={menu.link} className="rounded hover:bg-slate-400">
                <h5>{menu.page}</h5>
              </Link>
            )}
          </li>
        ))}
      </nav>
    </header>
  );
}
