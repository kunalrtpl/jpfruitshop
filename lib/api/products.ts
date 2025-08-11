// lib/api/products.ts
import { serverFetch } from "@/lib/http";
import { Product } from "@/types/Product";

// GET all products
export async function getProducts() {
  return serverFetch<Product[]>("/api/v1/products/fruits", { method: "GET", revalidateSeconds: false });
}

