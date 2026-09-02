export interface ProductReview {
  rating: number;
  comment: string;
  date: string; // ISO 8601 Date String
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string; // ISO 8601 Date String
  updatedAt: string; // ISO 8601 Date String
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string; // Optional as some categories (like groceries) may omit brand
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string; // e.g., "In Stock" | "Low Stock"
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export interface DummyJSONProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
