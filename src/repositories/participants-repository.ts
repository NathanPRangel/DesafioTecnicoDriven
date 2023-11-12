import { prisma } from '../config/database';

export async function participanteCreate(name: string, balance: number) {
  const participant = await prisma.participantes.create({
    data: {
      name: name,
      balance: balance,
    },
  });
  return participant;
}