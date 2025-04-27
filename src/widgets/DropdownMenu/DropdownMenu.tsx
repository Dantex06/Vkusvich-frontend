"use client";

import { useState } from "react";

import Menu from "@/assets/icons/Menu.svg";
import MenuTablet from "@/assets/icons/MenuTablet.svg";
import MenuPhone from "@/assets/icons/MenuPhone.svg";

import styles from "./DropdownMenu.module.scss";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.menuComputer}>
          <Menu />
        </div>
        <div className={styles.menuTablet}>
          <MenuTablet />
        </div>
        <div className={styles.menuPhone}>
          <MenuPhone />
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.items}>
            <p className={styles.item}>Войти</p>
            <p className={styles.item}>Избранное</p>
            <p className={styles.item}>Категории</p>
            <p className={styles.item}>Рекомендации</p>
            <p className={styles.item}>Новости</p>
          </div>
        </div>
      )}
    </div>
  );
};
