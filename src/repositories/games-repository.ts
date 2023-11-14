import { prisma } from '../config/database';

async function gameCreate(homeTeamName: string, awayTeamName: string) {
  const game = await prisma.jogo.create({
    data: {
      homeTeamName: homeTeamName,
      awayTeamName: awayTeamName,
      homeTeamScore: 0,
      awayTeamScore: 0,
      isFinished: false,
    },
  });

  return game;
}

async function gameFind() {
  const game = await prisma.jogo.findMany();
  return game;
}

export const gameRepository = {
  gameCreate,
  gameFind,
};
