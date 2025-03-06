import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"

export const plantSeeds = (plantingPlan) => {
    for (const rows of plantingPlan) {
        for (const row of rows) {
            switch (row) {
                case "Soybean":
                    addPlant(createSoybean())
                    break;
                case "Corn":
                    addPlant(createCorn())
                    break;
                case "Sunflower":
                    addPlant(createSunflower())
                    break;
                case "Asparagus":
                    addPlant(createAsparagus())
                    break;
                case "Wheat":
                    addPlant(createWheat())
                    break;
                case "Potato":
                    addPlant(createPotato())
                    break;
            }
        }
    }
}