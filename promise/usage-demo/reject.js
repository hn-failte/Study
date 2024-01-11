const standardTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

const errorTask = () => {
  return new Promise((resolve, reject) => {
    throw new Error('error')
  })
}

const mainTask = async () => {
  await standardTask()
  await errorTask()
}

const main = async () => {
  try {
    await mainTask()
  } catch (error) {
    console.log('catched error', error.message)
  }
}

main()
