export interface IProd {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
};

export interface IProdState {
    products: IProd[],
    loading: boolean,
    error: string | null
};

export interface ICartState {
    item: IProd,
    cart: IProd[]
};



