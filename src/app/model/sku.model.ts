export interface Sku {
    id: number;
    areaId: number;
    joinedWith: number | null;
    sku: string;
    defaultSku: string;
    status: 'open' | 'closed';
    countActive: 0 | 1;
}