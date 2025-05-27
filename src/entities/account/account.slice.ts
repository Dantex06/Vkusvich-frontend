import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  login,
  logout,
  registration,
} from "@/entities/account/api/account.thunks";

interface Role {
  id: number;
  name: string;
}

interface Account {
  id: number;
  name: string;
  isBlocking: boolean;
  role: Role;
  avatarUrl?: string;
}

interface AuthState {
  account: Account | null;
  tokens: Tokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  account: null,
  tokens: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  selectors: {
    selectAccount: (state) => state.account,
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectAccessToken: (state) => state.tokens,
  },
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{
        account: Account;
        tokens: Tokens;
      }>
    ) {
      state.account = action.payload.account;
      state.tokens = action.payload.tokens;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.account = null;
      state.tokens = null;
      state.isAuthenticated = false;
    },
    setAccount(state, action: PayloadAction<Account>) {
      state.account = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        const { account, tokens } = action.payload;
        state.account = account;
        state.tokens = tokens;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { account, tokens } = action.payload;
        state.account = account;
        state.tokens = tokens;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.account = null;
        state.tokens = null;
        state.isAuthenticated = false;
      });
  },
});

export const { loginStart, loginSuccess, loginFailure, setAccount } =
  accountSlice.actions;

export const {
  selectAccount,
  selectIsAuthenticated,
  selectIsLoading,
  selectError,
  selectAccessToken,
} = accountSlice.selectors;

export default accountSlice.reducer;
