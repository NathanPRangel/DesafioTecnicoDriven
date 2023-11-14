import { prisma } from '../config/database';

export async function participanteCreate(name: string, balance: number) {
  const participant = await prisma.participante.create({
    data: {
      name: name,
      balance: balance,
    },
  });
  return participant;
}
