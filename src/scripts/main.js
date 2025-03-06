import { Catalog } from "./catalog.js";
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()

console.log("Welcome to the main module")

const asparagusSeed = createAsparagus()
console.log("#2")
console.log(asparagusSeed)

const testWheat = createWheat()
addPlant(testWheat)
const plantList = usePlants()
console.log("#3")
console.log(plantList[0])

plantSeeds(yearlyPlan)
const plantsArray = usePlants()
console.log("#4")
for (const row of plantsArray) {
    console.log(row)
}

const plantsArrayTwo = usePlants()
const seedsArray = harvestPlants(plantsArrayTwo)
console.log("#5")
console.log(seedsArray)

Catalog(seedsArray)