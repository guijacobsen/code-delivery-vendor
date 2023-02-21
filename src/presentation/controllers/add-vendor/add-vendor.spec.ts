import { AddVendorController } from './add-vendor';

describe('AddVendor Controller', () => {
	test('should return 400 if no name is provided', async () => {
		const sut = new AddVendorController();

		const httpRequest = {
			body: {
				email: 'any_email',
			},
		};

		const reponse = await sut.handle(httpRequest);
		expect(reponse.statusCode).toBe(400);
	});
});
