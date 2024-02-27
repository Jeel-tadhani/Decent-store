import { Request, Response } from "express";
import { User } from "../entity/User.entity";
import { AppDataSource } from "../data-source";
import { CustomRequest } from "../util/Interface/expressInterface";

class UserController {


    public async GetUser(req: CustomRequest, res: Response) {
        try {
            const userRepository = AppDataSource.getRepository(User)
            const id: number = parseInt(req.user.user_id);

            const user = await userRepository
                .createQueryBuilder("user")
                .select(["user.user_name", "user.email", "user.sso_id", "user.avatar", "user.password_changed", "user.course"])
                .leftJoinAndSelect("user.course", "course")
                .where("user.user_id = :id", { id })
                .getOne();

            if (!user) {
                return res.status(404).json({
                    message: "User does not exist",
                    status: false
                });
            }

            return res.status(200).json({
                message: "User fetched successfully",
                status: false,
                data: user
            })


        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: false,
                error: error.message
            })
        }
    }


}

export default UserController;