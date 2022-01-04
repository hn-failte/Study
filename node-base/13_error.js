try {
  throw new Error('Here is an error')
} catch (error) {
  console.log(error.message)
}

process.on('uncaughtException', err => {
  console.log(err.message)
  process.exit(1)
})

throw new Error('There is an error')
