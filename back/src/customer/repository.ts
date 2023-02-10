import { Customer, CustomerProps } from './entity'

export class CustomerRepository implements Repository<Customer> {
  find(): Promise<Customer[]> {
    throw new Error('Method not implemented.')
  }
  findOne(id: String): Promise<Customer> {
    throw new Error('Method not implemented.')
  }
  create(item: Customer): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  update(): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  delete(): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
