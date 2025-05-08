"use client";

import Logo from "@/assets/icons/Logo.svg";
import SmallLogo from "@/assets/icons/LogoPhone.svg";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import { routingLinks } from "@/config/routingLinks";

export const Footer = () => {
  const pathname = usePathname();
  if (
    routingLinks.login === pathname ||
    routingLinks.registration === pathname
  ) {
    return;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.info}>
          <div className={styles.leftSide}>
            <div className={styles.defaultLogo}>
              <Logo />
            </div>
            <div className={styles.smallLogo}>
              <SmallLogo />
            </div>
            <p className={styles.quote}>
              &#34;Жизнь без риска, всё равно что еда без перца. Не ешьте, если
              вы не голодны. Еда вкусная и приятно пахнет, только если вы
              голодны! Без еды можно прожить месяц. — Можно — а смысл? — А без
              смысла можно прожить всю жизнь.&#34;
            </p>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.navigation}>
              <p className={styles.titleSection}>Навигация</p>
              <p className={styles.link}>Главная</p>
              <p className={styles.link}>Все рецепты</p>
              <p className={styles.link}>Категории</p>
              <p className={styles.link}>Новости</p>
              <p className={styles.link}>Подбор</p>
            </div>
            <div className={styles.contacts}>
              <p className={styles.titleSection}>Контакты</p>
              <p className={styles.link}>GitHub</p>
              <p className={styles.link}>Telegram</p>
              <p className={styles.link}>Vk</p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <p className={styles.rules}>© 2025 Vkusvich - все права защищены </p>
      </div>
    </div>
  );
};
