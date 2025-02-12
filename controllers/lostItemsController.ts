
import { LostItemSchema } from "../schemas/schemas.ts";
import { prisma } from "../lib/db.ts";
import type { Request, Response } from "express";

export const addLostItem = async (req : Request, res : Response) : Promise<any> => {
    try {
        const result = LostItemSchema.safeParse(req.body);

        if(!result.success) { 
            throw new Error("Please enter valid data");
        }

        const { name, description, location, date } = result.data;

        const lostItem = await prisma.lostItems.create({
            data: {
                name,
                description,
                location,
                date
            }
        })

        return res.status(201).json({
            message: "Lost Item added successfully",
            item: lostItem
        })

    } catch (error) {
        console.log(`Error occured while adding the lost item : ${error}`);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getLostItems = async (req: Request, res: Response) : Promise<any> => {
    try {
        const lostItems = await prisma.lostItems.findMany();

        return res.status(200).json({
            message: "All lost items fetched successfully",
            lostItems
        })

    } catch (error) {
        console.log(`Error occured while fetching lost items: ${error}`)
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteLostItem = async (req: Request, res : Response) : Promise<any> => {
    try {
  
      const { id } = req.params;
  
      await prisma.lostItems.delete({
        where: {
          id
        }
      })
  
      return res.status(200).json({
        message:"Lost Item Deleted Successfully"
      })
      
    } catch (error) {
      console.log(`Error occured while deleting the lost item: ${error}`)
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }