import { HttpPostClientSpy } from "@/data/test/mock-http-client"
import { RemoteAuhtentication } from "./remote-authentication"
import { mockAuthentication } from "@/domain/test/mock-authentication"
import faker from 'faker'


type SutTypes = {
    sut: RemoteAuhtentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuhtentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuhtentication', () =>{
    test('should call httpPostClient with correct URL', async ()=>{
        const url = faker.internet.url()
        const { sut, httpPostClientSpy} = makeSut(url)
        sut.auth(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)
    })

    test('should call httpPostClient with correct body', async ()=>{
        const { sut, httpPostClientSpy} = makeSut()
        const authenticationParams = mockAuthentication()
        sut.auth(authenticationParams)
        expect(httpPostClientSpy.body).toEqual(authenticationParams)
    })
})