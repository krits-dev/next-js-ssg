export const numArray = (count: number) => { 
  let array = []
  for (let i = 0; i < count; i++) { 
    array.push(i + 1)
  }
  return array
}