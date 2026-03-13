// Mock Premier League fixtures for Gameweek 28
export interface Fixture {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
}

export const fixtures: Fixture[] = [
  {
    id: 1,
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    date: "2024-03-15",
    time: "17:30"
  },
  {
    id: 2,
    homeTeam: "Manchester City",
    awayTeam: "Liverpool",
    date: "2024-03-16",
    time: "20:00"
  },
  {
    id: 3,
    homeTeam: "Tottenham",
    awayTeam: "Manchester United",
    date: "2024-03-17",
    time: "14:00"
  },
  {
    id: 4,
    homeTeam: "Newcastle",
    awayTeam: "Brighton",
    date: "2024-03-17",
    time: "16:30"
  },
  {
    id: 5,
    homeTeam: "Aston Villa",
    awayTeam: "West Ham",
    date: "2024-03-18",
    time: "15:00"
  }
];