export interface ItemProps {
    id: string;
    name: string;
    category: string;
    imageUrl: string;
    onDelete: (id: string) => void;
}