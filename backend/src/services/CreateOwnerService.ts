import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

// model
import Owner from '../models/Owner';

interface Request {
  login: string;
  avatar_url: string;
}

class CreateOwnerService {
  public async execute({ login, avatar_url }: Request): Promise<Owner> {
    const ownerRepository = getRepository(Owner);

    let owner = await ownerRepository.findOne({
      where: {
        login,
      },
    });

    if (!owner) {
      owner = ownerRepository.create({
        id: uuid(),
        login,
        avatar_url,
      });

      await ownerRepository.save(owner);
    }

    return owner;
  }
}

export default CreateOwnerService;
