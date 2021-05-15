// add 500ms delay to async call purely for animation reasons
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Fetcher(...args) {
  await sleep(500)
  const res = await fetch(...args)
  return res.json()
}
