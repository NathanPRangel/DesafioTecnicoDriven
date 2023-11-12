import { participanteCreate } from '../repositories/participants-repository';

async function createParticipant(name: string, balance: number) {
  if (balance < 10) {
    throw new Error('Balance must be at least 10 for participant creation.');
  }
  const create = await participanteCreate(name, balance);

  return create;
}
export const participantService = {
  createParticipant,
};
