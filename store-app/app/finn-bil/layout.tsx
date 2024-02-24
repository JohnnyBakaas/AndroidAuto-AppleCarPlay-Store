import styles from "@/ui/finn-bil/layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <h1>Finn din bil</h1>

      {children}
    </main>
  );
}
