import Shoes from '../model/Shoes';
import { Request, Response } from 'express';

export const getShoes = (req: Request, res: Response) => {
    Shoes.find().then(shoes => {
        res.status(200).json(shoes);
    }).catch(err => {
        res.status(500).json({ message: err.message });
    })
}

export const getShoesById = (req: Request, res: Response) => {
    Shoes.findById(req.params.id).then(shoes => {
        res.status(200).json(shoes);
    }
    ).catch(err => {
        res.status(500).json({ message: err.message });
    });
}

export const createShoes = (req: Request, res: Response) => {
    let shoes = new Shoes(req.body);
    shoes.save().then((shoes) => {
        res.status(200).json(shoes);
    }
    ).catch((err) => {
        res.status(500).json({ message: err.message });
    }
    );

}

export const updateShoes = (req: Request, res: Response) => {
    Shoes.findByIdAndUpdate(req.params.id, {...req.body}).then(shoes => {
        res.status(200).json(shoes);
    }
    ).catch(err => {
        res.status(500).json({ message: err.message });
    });
}

export const deleteShoes = (req: Request, res: Response) => {
    Shoes.findByIdAndRemove(req.params.id).then(shoes => {
        res.status(200).json(shoes);
    }
    ).catch(err => {
        res.status(500).json({ message: err.message });
    });
}


