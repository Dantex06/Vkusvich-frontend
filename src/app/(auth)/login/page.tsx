"use client";

import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { routingLinks } from "@/config/routingLinks";
import { Button, Checkbox, Input } from "@/components/UI-kit";
import { ButtonSize, ButtonTypes } from "@/components/UI-kit/Button/type";

const loginSchema = z.object({
  email: z.string().email({ message: "Неправильно введена почта" }),
  password: z.string().min(8, { message: "Введите не менее 8 символов" }),
});

type formLogin = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<formLogin> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Вход</h1>
      <p className={styles.description}>
        Добро пожаловать! укажите данные для входа
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register("email")}
          label="Почта"
          placeholder="Введите свою почту"
          errormessage={errors.email?.message}
          autoComplete="off"
        />
        <Input
          type="password"
          {...register("password")}
          label="Пароль"
          placeholder="Введите свой пароль"
          errormessage={errors.password?.message}
          autoComplete="off"
        />
        <div className={styles.secondaryButtons}>
          <Checkbox title="Запомнить меня" />
          <a href={routingLinks.resetPassword} className={styles.resetPassword}>
            Забыл пароль
          </a>
        </div>
        <div className={styles.authButtons}>
          <Button
            size={ButtonSize.large}
            styleType={ButtonTypes.primary}
            disabled={isSubmitting}
            type="submit"
          >
            Войти
          </Button>
          <Button size={ButtonSize.large} styleType={ButtonTypes.outline}>
            Войти с помощью Google
          </Button>
        </div>
      </form>
      <p className={styles.registerText}>
        Нет аккаунта?{" "}
        <a className={styles.link} href={routingLinks.registration}>
          Зарегистрируйтесь
        </a>
      </p>
    </div>
  );
};

export default Login;
