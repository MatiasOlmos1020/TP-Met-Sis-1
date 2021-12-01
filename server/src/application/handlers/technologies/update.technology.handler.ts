import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import UpdateTechnologyCommand from '../../commands/technologies/update.technology.command';
import TechnologyAlreadyExistsError from '../../customErrors/technologies/technology.already.exists.error';
import TechnologyNotFoundError from '../../customErrors/technologies/technology.not.found.error';
import type { Technology } from '../../../domain/entities/technology.entity';

class UpdateTechnologyHandler {
  async execute(command: UpdateTechnologyCommand): Promise<Technology> {
    const technology: Technology | null = await TechnologyRepository.findOneById(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    if (await TechnologyRepository.findOneByName(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    technology.setName(command.getName());

    return technology;
  }
}
export default new UpdateTechnologyHandler();
