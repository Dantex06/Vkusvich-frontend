"use client";

import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input } from "@/components/UI-kit";
import { routingLinks } from "@/config/routingLinks";
import { ButtonSize, ButtonTypes } from "@/components/UI-kit/Button/type";
import { z } from "zod";
import { useAppDispatch } from "@/config/hooks";
import { registration } from "@/entities/account/api/account.thunks";

const loginSchema = z.object({
  email: z.string().email({ message: "Неправильно введена почта" }),
  name: z.string().min(4, { message: "Введите не менее 4 символов" }),
  password: z.string().min(8, { message: "Введите не менее 8 символов" }),
});

type formLogin = z.infer<typeof loginSchema>;

const Registration = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<formLogin> = async (data) => {
    try {
      const resultAction = await dispatch(registration(data));
      console.log(resultAction);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Регистрация</h1>
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
          type="text"
          {...register("name")}
          label="Имя"
          placeholder="Введите своё имя"
          errormessage={errors.name?.message}
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
        <Checkbox title="Запомнить меня" />
        <div className={styles.authButtons}>
          <Button
            size={ButtonSize.large}
            styleType={ButtonTypes.primary}
            disabled={isSubmitting}
            type="submit"
          >
            Зарегистрироваться
          </Button>
          <Button size={ButtonSize.large} styleType={ButtonTypes.outline}>
            Войти с помощью Google
          </Button>
        </div>
      </form>
      <p className={styles.loginText}>
        Есть аккаунт?{" "}
        <a className={styles.link} href={routingLinks.login}>
          Войдите
        </a>
      </p>
    </div>
  );
};

export default Registration;
