import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Essence</title>
        <meta
          name="description"
          content="Essence is a cutting-edge company providing innovative solutions in IT and software development. Explore our services, expertise, and vision for the future."
        />
        <meta
          name="keywords"
          content="Essence, company, innovation, technology, solutions, business, services"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} timeZone="Asia/Tashkent">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
