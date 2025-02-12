import type { Request, Response } from "express";
import { prisma } from "../lib/db.ts";
import { FoundItemSchema } from "../schemas/schemas.ts";

export const addFoundItem = async (req: Request, res: Response) : Promise<any> => {
    try {
            const result = FoundItemSchema.safeParse(req.body);
    
            if(!result.success) { 
                throw new Error("Please enter valid data");
            }
    
            const { name, description, location, date } = result.data;
    
            const foundItem = await prisma.foundItems.create({
                data: {
                    name,
                    description,
                    location,
                    date
                }
            })
    
            return res.status(201).json({
                message: "Lost Item added successfully",
                item: foundItem
            })
    
        } catch (error) {
            console.log(`Error occured while adding the lost item : ${error}`);
            return res.status(500).json({ error: "Internal Server Error" })
        }

};

export const getFoundItems = async (req: Request, res: Response) : Promise<any> => {
  try {
    const foundItems = await prisma.foundItems.findMany();

    return res.status(200).json({
      message: "All found items fetched successfully",
      foundItems,
    });
  } catch (error) {
    console.log(`Error occured while fetching found items: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteFoundItem = async (req: Request, res : Response) : Promise<any> => {
  try {

    const { id } = req.params;

    await prisma.foundItems.delete({
      where: {
        id
      }
    })

    return res.status(200).json({
      message: "Found Item Deleted Successfully"
    })
    
  } catch (error) {
    console.log(`Error occured while deleting the found item: ${error}`)
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
