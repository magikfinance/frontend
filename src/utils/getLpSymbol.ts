export const getLPSymbol = (token0Symbol: string, token1Symbol: string) => {
  if (token0Symbol === 'WFTM') {
    return `FTM-${token1Symbol} LP`
  }
  if (token1Symbol === 'WFTM') {
    return `${token0Symbol}-FTM LP`
  }
  return `${token0Symbol}-${token1Symbol} LP`
}
