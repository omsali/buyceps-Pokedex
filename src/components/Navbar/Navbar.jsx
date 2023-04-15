import styles from '../../styles/navbar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={`${styles.navbarWrapper} h-16 info-bg`} >
      <Link className='flex' href="/">
        <Image src="/pokeball.png" width='30' height='30' alt='pokeball' />
        <div className='text-2xl font-bold absolute left-14'>Pokedex</div>
      </Link>
      {/* <div className={styles.navbarOptions}>
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

      </div> */}
    </div>
  );
};
export { Navbar };
