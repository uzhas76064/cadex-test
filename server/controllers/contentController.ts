import {Response, Request} from "express";
import {content as data} from "../data/content";

export const getAllContent = (req: Request, res: Response) => {
    res.json(data)
}

export const getContentById = (req: Request, res: Response) => {
    const content = data.find((item) => item.id === req.params.id);
    content ? res.json(content) : res.status(404).json({ message: "Не найдено" });
};