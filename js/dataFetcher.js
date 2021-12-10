async function dataFetcher(url = null) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export { dataFetcher }