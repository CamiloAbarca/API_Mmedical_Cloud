import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, LoginUserDTO, UpdateUserDTO, UserDTO } from "../dto/UserDTO"

const prisma = new PrismaClient()

export default class UserRespository {

    public readonly findAll = async (): Promise<UserDTO[]> => {
        const users = await prisma.user.findMany()
        const usersWhithoutPassword = users.map(user => {
            const { password, ...usersWhithoutPassword } = user
            return usersWhithoutPassword
        })
        return usersWhithoutPassword
    }

    public readonly findById = async (id: number): Promise<UserDTO | undefined> => {
        const user = await prisma.user.findUnique({ 
            where: { 
                id 
            }
        })

        if (!user) return

        const { password, ...usersWhithoutPassword } = user
        return usersWhithoutPassword
    }

    public readonly findByEmail = async (email: string): Promise<LoginUserDTO | undefined> => {
        const user = await prisma.user.findUnique({ 
            where: { 
                email
            }
        })

        if (!user) return

        return user
    }

    public readonly create = async (user: CreateUserDTO): Promise<UserDTO> => {
        const newUser = await prisma.user.create({ 
            data: user 
        })
        const { password, ...usersWhithoutPassword } = newUser
        return usersWhithoutPassword
    }

    public readonly update = async (id: number, user: UpdateUserDTO): Promise<void>=> {
        await prisma.user.update({
            where: { 
                id 
            },
            data: user
        })
    }

    public readonly delete = async (id: number): Promise<void> => {
        await prisma.user.delete({
            where: {
                id
            }
        })
    }
}

