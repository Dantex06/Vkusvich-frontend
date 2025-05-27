import type { Metadata } from "next";
import "@/assets/styles/index.scss";
import { Footer, Header } from "@/widgets";
import { ProviderLayout } from "@/app/provider";

export const metadata: Metadata = {
  title: "Vkusvich - рецепты со всего мира",
  description: "Vkusvich - попробуй всё, что пожелаешь",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ProviderLayout>
          <Header />
          {children}
          <Footer />
        </ProviderLayout>
      </body>
    </html>
  );
}
