import { HttpPostClient } from "data/protocols/http/http-post-client"
import { RemoteAuhtentication } from "./remote-authentication"


describe('RemoteAuhtentication', () =>{
    test('should call httpPostClient with correct URL', async ()=>{
        class HttpPostClientSpy implements HttpPostClient {
            url?: string
            async post(url:string): Promise<void>{
                this.url = url
                return Promise.resolve()
            }
        }
        const url = 'any_url'
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut = new RemoteAuhtentication(url, httpPostClientSpy)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})