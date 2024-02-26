import {ItemInterface} from "../Item/ItemInterface";

export interface ItemListProps{
    items: ItemInterface[];
    onDelete: (id: string) => void;
}