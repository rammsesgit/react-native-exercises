export const base = {
  margin: 10,
  padding: 7,
  textAlign: 'center',
  fontSize: 20,
  color: '#fff',
  borderRadius: 8,
  backgroundColor: '#1e7fe4'
}

export const small = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  width: 75
}

export const rounded = {
  borderRadius: 50
}

// Compositions
export const baseRounded = {
  ...base,
  ...rounded
}

export const smallRounded = {
  ...base,
  ...small,
  ...rounded
}
