export type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    inventory?: number;
    tags?: string[];
    currency: string;
    imageSrc: string;
    imageAlt: string;
    color?: any;
    colorCode?: any;
    size?: any;
}

