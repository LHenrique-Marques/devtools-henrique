import { Metadata } from "next";
import ClientCookies from "./client";

export const metadata: Metadata = {
  title: "Política de Cookies | DevTools",
  description: "Saiba como usamos cookies no site DevTools.",
};

export default function CookiesPage() {
  return <ClientCookies />;
}
