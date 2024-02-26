export interface ItemListProps {
    items: { id: string; name: string; category: string }[];
    onDelete: (id: string) => void;
}