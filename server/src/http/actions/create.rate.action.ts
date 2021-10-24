import { Request, Response } from "express";
import CreateRateHandler from "../../application/handlers/rates/create.rate.handler";
import CreateCommandRates from "../../application/commands/create.command.rates";

class CreateUserAction {
    async run(req: Request, res: Response) {
        const command: CreateCommandRates = req.body;
        
        await CreateRateHandler.execute(command);
        
        return res.status(201).json({message: "User created"});
    }
}

export default new CreateUserAction();