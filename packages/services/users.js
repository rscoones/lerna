const bob = {name: "Bob"}
const fred = {name: "Fred"}

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([bob, fred])
    }, 500)
  })
}

export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fred)
    }, 500)
  })
}
