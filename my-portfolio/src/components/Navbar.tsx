import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <ul className="global-nav">
      <li className="name">Michael W Howell</li>
      <div className="items">
        <Link href="/" className="nav-link"><li>Home</li></Link>
        <Link href="/story" className="nav-link"><li>My Story</li></Link>
        <Link href="/practice" className="nav-link"><li>Practice</li></Link>
      </div>
    </ul>
  )
}

export default Navbar;