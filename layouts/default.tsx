import {Head} from "./head";

import {Navbar} from "@/components/navbar";

import '@mysten/dapp-kit/dist/index.css';
import {getFullnodeUrl} from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';


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
            <QueryClientProvider client={queryClient}>
                <SuiClientProvider networks={networks} defaultNetwork="devnet">
                    <WalletProvider>
                        <Head/>
                        <Navbar/>
                        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                            {children}
                        </main>
                    </WalletProvider>
                </SuiClientProvider>
            </QueryClientProvider>
        </div>
    );
}
