const plantsArray = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            plantsArray.push(seed)
        }
    } else {
        plantsArray.push(seedObject)
    }   
}

export const usePlants = () => {
    return structuredClone(plantsArray)
}