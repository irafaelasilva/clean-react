import { AuthenticationParams } from "@/domain/usercases/authentication";
import  faker from "faker";


export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})