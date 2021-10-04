// Интерфейсы и абстрактные классы.

//>Интерфейс
class User {
	username: string
	age: number
}
interface Repository<T> {
	create: (obj: T) => T
	get: () => T
	delete: (obj: T) => T
	update: (obj: T) => T
}
//T - сами определяем какой тип будет использоваться
class UserRepo implements Repository {
	create(obj: User): User {
		return undefined
	}
	delete(obj: User): User {
		return undefined
	}
	get(obj: User): User {
		return undefined
	}
	update(obj: User): User {
		return undefined
	}
}