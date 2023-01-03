// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    roll?: number | null;
    message?: string | string[] | undefined;
    error?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { diceroll } = req.query;
    try {
        if (!diceroll || !Number(diceroll) || Number(diceroll) < 0)
            res.status(200).json({
                roll: null,
                message: `${diceroll} is not a number greater than 1`,
            });
        res.status(200).json({
            roll: Math.floor(Math.random() * Number(diceroll) + 1) || -1,
        });
    } catch (err) {
        res.status(500).send({ error: `Failed to fetch data: ${err}` });
    }
}
