import { HttpPostClientSpy } from "./../../test/mock-http-client"
import { RemoteAuhtentication } from "./remote-authentication"


type SutTypes = {
    sut: RemoteAuhtentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url  = 'any_url'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuhtentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuhtentication', () =>{
    test('should call httpPostClient with correct URL', async ()=>{
        const url = 'other_url'
        const { sut, httpPostClientSpy} = makeSut(url)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})