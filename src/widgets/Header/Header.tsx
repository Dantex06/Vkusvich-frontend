import { DropdownMenu } from "@/widgets";

import Logo from "@/assets/icons/Logo.svg";
import LogoTablet from "@/assets/icons/LogoTablet.svg";
import LogoPhone from "@/assets/icons/LogoPhone.svg";
import Search from "@/assets/icons/Search.svg";
import Menu from "@/assets/icons/Menu.svg";
import MenuTablet from "@/assets/icons/MenuTablet.svg";
import MenuPhone from "@/assets/icons/MenuPhone.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoComputer}>
        <Logo />
      </div>
      <div className={styles.logoTablet}>
        <LogoTablet />
      </div>

      <div className={styles.navigation}>
        <p className={styles.navItem}>Главная</p>
        <p className={styles.navItem}>Новости</p>
        <p className={styles.navItem}>Подборки</p>
      </div>
      <div className={styles.search}>
        <div className={styles.searchLogo}>
          <Search />
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Поиск рецептов"
        />
      </div>
      <div className={styles.searchMobile}>
        <Search />
      </div>
      <div className={styles.logoPhone}>
        <LogoPhone />
      </div>

      <DropdownMenu />
    </div>
  );
};
