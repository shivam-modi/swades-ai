import User from "../models/user";

export const createUser = async (email: string, password: string) => {
    return User.create({ email, passwordHash: password });
}

export const findUserByEmail = async (email: string) => {
    return User.findOne({ where: { email } })
}