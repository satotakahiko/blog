export const statsNameForP = {
  gamesPlayed: "登板",
  gamesStarted: "先発登板",
  numberOfPitches: "投球数",
  inningsPitched: "投球回数",
  pitchesPerInning: "1イニングの平均投球数",
  era: "防御率（自責点率）",
  runsScoredPer9: "失点率（単純な失点率）",
  runs: "失点",
  strikeOuts: "奪三振",
  strikeoutsPer9Inn: "奪三振率",
  whip: "WHIP",
  wins: "勝数",
  losses: "負数",
  winPercentage: "勝率",
  atBats: "対打席数（四死球、犠打、犠飛、打撃妨害、走塁妨害の数を除いた回数）",
  battersFaced: "対打席総数",
  hits: "被安打",
  doubles: "被2塁打",
  triples: "被3塁打",
  homeRuns: "被本塁打",
  baseOnBalls: "与四球",
  intentionalWalks: "敬遠・故意四球",
  hitByPitch: "与死球",
  strikeoutWalkRatio: "K/BB",
  strikes: "ストライク数",
  strikePercentage: "ストライク率",
  walksPer9Inn: "与四球率",
  avg: "被安打率",
  obp: "被出塁率",
  slg: "被長打率",
  ops: "OPS",
  earnedRuns: "自責点",
  balks: "ボーク",
  wildPitches: "暴投",
  hitsPer9Inn: "被安打率",
  homeRunsPer9: "被本塁打率",
  totalBases: "被塁打",
  saves: "セーブ",
  saveOpportunities: "セーブ機会",
  holds: "ホールド",
  blownSaves: "セーブ失敗",
  inheritedRunners: "リリーフ投手が登板時に背負った走者の数（引き継いだ走者数）",
  inheritedRunnersScored: "リリーフ投手が登板時に背負った走者のうち、ホームに生還した割合",
  catchersInterference: "キャッチャーにおける打撃妨害回数",
  gamesFinished: "先発を除く、その試合で最後の投手となった数",
  completeGames: "完投",
  shutouts: "完封",
  sacBunts: "被犠打",
  sacFlies: "被犠牲フライ",
  outs: "奪ったアウト",
  groundOuts: "ゴロアウト",
  airOuts: "フライアウト",
  groundOutsToAirouts: "ゴロアウト率",
  groundIntoDoublePlay: "併殺打",
  pickoffs: "牽制アウト",
  caughtStealing: "盗塁阻止",
  stolenBases: "被盗塁",
  stolenBasePercentage: "被盗塁成功率",
}

export const statsNameForH = {
  gamesPlayed: "出場",
  atBats: "打席（四死球、犠打、犠飛、打撃妨害、走塁妨害の数を除いた回数）",
  plateAppearances: "総打席",
  ops: "OPS",
  obp: "出塁率",
  slg: "長打率",
  avg: "打率",
  rbi: "打点",
  runs: "得点",
  totalBases: "塁打",
  hits: "安打",
  doubles: "2塁打",
  triples: "3塁打",
  homeRuns: "本塁打",
  atBatsPerHomeRun: "本塁打を記録するまでにかかる打席数",
  baseOnBalls: "四球",
  intentionalWalks: "敬遠",
  hitByPitch: "死球",
  strikeOuts: "三振",
  stolenBases: "盗塁",
  caughtStealing: "盗塁失敗",
  stolenBasePercentage: "盗塁成功率",
  sacBunts: "犠打",
  sacFlies: "犠牲フライ",
  babip: "本塁打、犠打を除くグラウンド内に飛んだ打球の安打率",
  groundOuts: "ゴロアウト",
  airOuts: "フライアウト",
  groundOutsToAirouts: "ゴロアウト率",
  groundIntoDoublePlay: "併殺打",
  numberOfPitches: "投球数",
  leftOnBase: "残塁",
  catchersInterference: "打撃妨害",
}

export const translateStatsForP = (stats: typeof statsNameForP | undefined) => {
  let ret: {} | undefined = undefined
  if (stats) {
    (Object.keys(statsNameForP) as (keyof typeof statsNameForP)[]).forEach(key => {
      ret = {
        ...ret,
        [statsNameForP[key]]: key in stats ? stats[key] : null
      }
    })
  }
  return ret
}

export const translateStatsForH = (stats: typeof statsNameForH | undefined) => {
  let ret: {} | undefined = undefined
  if (stats) {
    (Object.keys(statsNameForH) as (keyof typeof statsNameForH)[]).forEach(key => {
      ret = {
        ...ret,
        [statsNameForH[key]]: key in stats ? stats[key] : null
      }
    })
  }
  return ret
}