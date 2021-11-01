import { Request, Response } from "express";
import FilterRateHandler from "../../../application/handlers/rates/filter.rate.handler";
import FilterRatesCommand from "../../../application/commands/rates/filter.rates.command";
import type { Rate } from "../../../domain/entities/rate.entity";

class FilterRateAction {
    async run(req: Request, res: Response) {
        const command: FilterRatesCommand = new FilterRatesCommand(
            req.body.technologyIds,
            req.body.seniority,
            req.body.language,
            req.body.currency
        );

        try {
            const filteredRates: Rate[] = await FilterRateHandler.execute(command);
            return res.status(200).json(filteredRates);
        } catch (error) {
            return res.status(400).send((error as Error).message);
        }
    }
}

export default new FilterRateAction();
