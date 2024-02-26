export interface CreateItemProps {
    onCreate: (name: string, category: string, imageUrl: string) => void;
}