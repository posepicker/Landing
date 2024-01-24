import Header from "@/app/(main)/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PosePicker",
  description: "포토부스에서 고민하는 당신을 위한 포즈추천 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kor">
      <body>
        <Header />
        <main> {children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
