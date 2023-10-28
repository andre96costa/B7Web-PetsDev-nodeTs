import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    const menu = createMenuObject('');
    const banner = {
        title: "Todos os animais",
        background: "allanimals.jpg"
    }
    res.render('pages/page', { banner, menu });
}

export const dogs = (req: Request, res: Response) => {
    const menu = createMenuObject('dog');
    const banner = {
        title: "Todos os Cachorros",
        background: "banner_dog.jpg"
    }
    res.render('pages/page', { banner, menu });
}

export const cats = (req: Request, res: Response) => {
    const menu = createMenuObject('cat');
    const banner = {
        title: "Todos os Gatos",
        background: "banner_cat.jpg"
    }
    res.render('pages/page', { banner, menu });
}

export const fishes = (req: Request, res: Response) => {
    const menu = createMenuObject('fish');
    const banner = {
        title: "Todos os Peixes",
        background: "banner_fish.jpg"
    }
    res.render('pages/page', { banner, menu });
}