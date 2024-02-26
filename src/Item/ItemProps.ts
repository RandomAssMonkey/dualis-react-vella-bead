import {ItemInterface} from "./ItemInterface";

export interface ItemProps extends ItemInterface{
    onDelete: (id: string) => void;
    onImageClick: (imageUrl: string) => void;
}