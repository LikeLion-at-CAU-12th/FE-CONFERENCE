import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          <Image src="/images/흑백요리사.webp" width={500} height={150}></Image>
          {children}
        </main>
      </body>
    </html>
  );
}
