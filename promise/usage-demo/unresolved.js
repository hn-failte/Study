const task = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve, 10000)
    // while (1) { }
    // resolve(true)
  })
}

const mainTask = async () => {
  console.log('mainTask start')
  await task()
  console.log('mainTask end')
}

const main = async () => {
  try {
    await mainTask()
  } catch (error) {
    console.log('catched error', error.message)
  } finally {
    console.log('finally')
  }
  return 'main'
}

process.on('exit', code => {
  console.log('code', code)
})

main()
