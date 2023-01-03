import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CharCreator from "./charcreator";
import Combat from "./combat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <Head>
                <title>Sandbox</title>
                <meta name='Sandbox' content='Sandbox for anyting' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <Combat />
                <CharCreator />
            </main>
        </QueryClientProvider>
    );
}
