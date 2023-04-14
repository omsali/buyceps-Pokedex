import styles from '../../styles/navbar.module.css'
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={`${styles.navbarWrapper} h-16`} >
      <Link className='flex' href="/">
        <Image src="/pokeball.png" width='30' height='30' alt='pokeball' />
        <div className='text-xl font-semibold absolute left-14'>Pokedex</div>
      </Link>
      <div className={styles.navbarOptions}>
        {showSearch && (
          <input
            className="shadow appearance-none border rounded py-4 h-7 px-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline"
            id="search-jobs"
            type="text"
            placeholder="Search"
          />
        )}
        <div>
          <AiOutlineSearch onClick={() => setShowSearch((prev) => !prev)} />
        </div>
        <div>
          <AiOutlineBell />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};
export { Navbar };
