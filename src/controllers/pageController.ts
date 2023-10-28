import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    const menu = createMenuObject('all');
    const banner = {
        title: "Todos os animais",
        background: "allanimals.jpg"
    }
    res.render('pages/page', { banner, menu, list });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    const menu = createMenuObject('dog');
    const banner = {
        title: "Todos os Cachorros",
        background: "banner_dog.jpg"
    }
    res.render('pages/page', { banner, menu, list });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    const menu = createMenuObject('cat');
    const banner = {
        title: "Todos os Gatos",
        background: "banner_cat.jpg"
    }
    res.render('pages/page', { banner, menu, list });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    const menu = createMenuObject('fish');
    const banner = {
        title: "Todos os Peixes",
        background: "banner_fish.jpg"
    }
    res.render('pages/page', { banner, menu, list });
}