export const getTypeColor = (type: string): string => {
  if (type === 'bug') return '#92BC2C'
  else if (type === 'dark') return '#595761'
  else if (type === 'dragon') return '#0C69C8'
  else if (type === 'electric') return '#F2D94E'
  else if (type === 'fighting') return '#D3425F'
  else if (type === 'fire') return '#FBA54C'
  else if (type === 'flying') return '#A1BBEC'
  else if (type === 'ghost') return '#5F6DBC'
  else if (type === 'grass') return '#5FBD58'
  else if (type === 'ground') return '#DA7C4D'
  else if (type === 'ice') return '#75D0C1'
  else if (type === 'poison') return '#B763CF'
  else if (type === 'psychic') return '#FA8581'
  else if (type === 'rock') return '#C9BB8A'
  else if (type === 'steel') return '#5695A3'
  else if (type === 'water') return '#539DDF'
  else return '#A0A29F'
}
