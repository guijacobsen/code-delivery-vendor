import { Entity } from 'src/shared/entity'

export type CustomerProps = {
  firstName: String
  lastName: String
  email: String
}

export class Customer extends Entity<CustomerProps> {
  constructor(props: CustomerProps) {
    super(props)
  }
}
