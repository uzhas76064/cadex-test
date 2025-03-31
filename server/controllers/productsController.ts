import {Response, Request} from "express";
import {products as data} from "../data/products";

export const getAllContent = (req: Request, res: Response) => {
    res.json(data)
}

export const getContentById = (req: Request, res: Response) => {
    const content = data.find((item) => item.id === req.params.id);
    content ? res.json(content) : res.status(404).json({ message: "Не найдено" });
};