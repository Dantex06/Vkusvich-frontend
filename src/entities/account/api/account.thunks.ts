import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Account } from "@/entities/account/api/api.dto";
import { api } from "@/config/api";
import { Tokens } from "@/entities/account/account.slice";
import { cookieStorage } from "@/config/cookie";

type KnownError = {
  message: string;
  response?: {
    data?: {
      message?: string;
    };
  };
};

export const login = createAsyncThunk(
  "account/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post<{
        account: Account;
        tokens: Tokens;
      }>("/auth/login", { email, password });

      cookieStorage.setTokens(
        response.data.tokens.accessToken,
        response.data.tokens.refreshToken
      );

      return {
        account: response.data.account,
        tokens: response.data.tokens,
      };
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      return rejectWithValue(
        error.response?.data?.message || "Ошибка авторизации"
      );
    }
  }
);

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<Account>("/account");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      return rejectWithValue(
        error.response?.data?.message || "Ошибка получения данных аккаунта"
      );
    }
  }
);

export const registration = createAsyncThunk(
  "account/register",
  async (
    {
      email,
      name,
      password,
    }: { email: string; name: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post<{
        account: Account;
        tokens: Tokens;
      }>("/auth/sign-up", { email, name, password });

      cookieStorage.setTokens(
        response.data.tokens.accessToken,
        response.data.tokens.refreshToken
      );

      return {
        account: response.data.account,
        tokens: response.data.tokens,
      };
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      return rejectWithValue(
        error.response?.data?.message || "Ошибка регистрации"
      );
    }
  }
);

export const logout = createAsyncThunk("account/logout", async () => {
  await api.post("/auth/sign-out");
  cookieStorage.clearTokens();
});
