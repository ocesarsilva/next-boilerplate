async function runSeed() {
  console.log("⏳ Running seed...")

  const start = Date.now()

  // Add seed functions here

  const end = Date.now()

  console.log(`✅ Seed completed in ${end - start}ms`)

  process.exit(0)
}

runSeed().catch((err) => {
  console.error("❌ Seed failed")
  console.error(err)
  process.exit(1)
})
