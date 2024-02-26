export interface ItemProps {
    id: string;
    name: string;
    category: string;
    onDelete: (id: string) => void;
}