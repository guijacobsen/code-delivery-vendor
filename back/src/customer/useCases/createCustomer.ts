import { Customer } from '../entity'
import { CustomerRepository } from '../repository'

export const CreateCustomerUseCase = async (customer: Customer) => {
  const customerRepository: CustomerRepository = new CustomerRepository()

  await customerRepository.create(customer)
}
