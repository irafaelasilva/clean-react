import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { AuthenticationParams } from "@/domain/usercases/authentication";

export class RemoteAuhtentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient){}

    async auth(params: AuthenticationParams): Promise<void>{
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
            default: return Promise.resolve()
          }
    }
}