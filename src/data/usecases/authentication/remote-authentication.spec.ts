import { HttpPostClientSpy } from "./../../test/mock-http-client"
import { RemoteAuhtentication } from "./remote-authentication"


describe('RemoteAuhtentication', () =>{
    test('should call httpPostClient with correct URL', async ()=>{
        const url = 'any_url'
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut = new RemoteAuhtentication(url, httpPostClientSpy)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})