import errorList from '@config/errorList'
import { Request, Response, NextFunction } from 'express'

export default function (req: Request, res: Response, next: NextFunction) {
    const body = req.body

    if (!body) {
        return res.status(400).json(errorList.BODY_IS_EMPTY)
    }
    if (!body.title) {
        return res.status(400).json(errorList.MISSING_FIELD('title'))
    }
    if (!body.link) {
        return res.status(400).json(errorList.MISSING_FIELD('link'))
    }
    if (!body.description) {
        return res.status(400).json(errorList.MISSING_FIELD('description'))
    }
    if (!body.tags) {
        return res.status(400).json(errorList.MISSING_FIELD('tags'))
    }
    if (typeof body.tags != typeof []) {
        return res.status(400).json(errorList.WRONG_FIELD_TYPE('tags'))
    }

    next()
}