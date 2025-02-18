// TODO: Fix Any types


export const sortView = [
    {
        sort: "relevence",
        name: "relevence",
        arrSorter: (arr: any) => {
            return arr;
        },
    },
    {
        sort: "sale",
        name: "on sale",
        arrSorter: (arr: any) => {
            return arr.filter((item: any) => item.sale === true);
        },
    },
    {
        sort: "latest",
        name: "latest arrivals",
        arrSorter: (arr: any[]) => {
            return arr.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
    },
    {
        sort: "price_inc",
        name: "prcie: low to high",
        arrSorter: (arr: any) => {
            return arr.sort((a: any, b: any) => a.price - b.price);
        },
    },
    {
        sort: "price_dec",
        name: "price: high to low",
        arrSorter: (arr: any) => {
            return arr.sort((a: any, b: any) => b.price - a.price);
        },
    },
];
