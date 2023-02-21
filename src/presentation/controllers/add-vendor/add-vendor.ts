import { HttpRequest, HttpResponse } from 'src/presentation/protocols/http';

export class AddVendorController {
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		if (!httpRequest.body['name']) {
			return { statusCode: 400, body: '' };
		}
		return { statusCode: 200, body: '' };
	}
}
