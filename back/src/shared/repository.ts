interface Repository<T> {
  find(item: T): Promise<T[]>
  findOne(id: String): Promise<T>
  create(item: T): Promise<boolean>
  update(item: T): Promise<boolean>
  delete(id: String): Promise<boolean>
}
