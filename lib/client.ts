import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'pnzydm467u',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_APIKEY || "",
});