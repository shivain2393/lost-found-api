import type { Request, Response } from "express";
import { prisma } from "../lib/db.ts";
import stringSimilariy from "string-similarity";

export const getMatchingItems = async (req: Request, res: Response) : Promise<any> => {
  try {
    const lostItems = await prisma.lostItems.findMany();
    const foundItems = await prisma.foundItems.findMany();

    let matches = [];

    for (const lostItem of lostItems) {
      for (const foundItem of foundItems) {
        const nameSimilarity = stringSimilariy.compareTwoStrings(
          lostItem.name.toLowerCase(),
          foundItem.name.toLowerCase()
        );

        const isLocationMatch = lostItem.location.toLowerCase() === foundItem.location.toLowerCase()


        if(nameSimilarity > 0.7 && isLocationMatch){
            matches.push({
                lostItem,
                foundItem,
                similaritScore: nameSimilarity
            })
        }
      }
    }

    return res.status(200).json({
        message: "Matching Items Found",
        matchingItems: matches
    })

  } catch (error) {
    console.log(`Error while fetching matching items: ${error}`);
  }
};
