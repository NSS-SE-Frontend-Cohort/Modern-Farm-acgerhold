export const harvestPlants = (plantsArray) => {
    const seeds = []

    for (const plant of plantsArray) {
        switch (plant.type) {
            case "Corn":
                for (let i = 0; i < (plant.output / 2); i++) {
                    seeds.push(plant)
                }
                break;
            default:
                for (let i = 0; i < plant.output; i++) {
                    seeds.push(plant)
                }
                break;
        }
    }

    return seeds
}