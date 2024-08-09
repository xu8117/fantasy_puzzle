import {Head} from "./head";

import {Navbar} from "@/components/navbar";

import '@mysten/dapp-kit/dist/index.css';
import {getFullnodeUrl} from '@mysten/sui.js/client';
import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();
const networks = {
    localnet: {url: getFullnodeUrl('localnet')},
    devnet: {url: getFullnodeUrl('devnet')},
    testnet: {url: getFullnodeUrl('testnet')},
    mainnet: {url: getFullnodeUrl('mainnet')},
};

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head/>
            <Navbar/>
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                {children}
            </main>
        </div>
    );
}
