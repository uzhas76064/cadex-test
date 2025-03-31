import {Product} from "../types/Product";
import { v4 as uuidv4 } from 'uuid';

export const products: Product[] = [
    {id: uuidv4(), title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
    {id: uuidv4(), title: 'Title 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'},
]