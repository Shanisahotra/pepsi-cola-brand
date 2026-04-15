import prisma from "../utils/prismaClient.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};