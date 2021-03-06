import RateRepository from "../../../infrastructure/repositories/rate.repository";
import DeleteRateCommand from "../../commands/rates/delete.rate.command";
import RateNotFoundError from "../../customErrors/rates/rate.not.found.error";

class DeleteRateHandler{
    async execute(command: DeleteRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if (!rate) {
            throw new RateNotFoundError();
        }

        await RateRepository.deleteById(rate.getId());
    }
}
export default new DeleteRateHandler();