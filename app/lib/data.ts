import { sql } from '@vercel/postgres';
import {LatestInvoiceRaw} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();

    // ...
}
