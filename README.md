# ECommerce Backend
## API Spec - Products
### Get
* `/api/products`: returns all the products in the backend

	**_Response (200)_**
	```typescript
	type Response = {
		products: Array<{
			id: string,
			title: string,
			description?: string,
			code: string,
			price: number,
			status: boolean,
			stock: number,
			category: string,
			thumbnails?: Array<string>
		}>
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal Server Error'
	}
	```

* `/api/products/:pid`: returns one specific product

	**_Response (200)_**
	```typescript
	type Response = {
		product: {
			id: string,
			title: string,
			description?: string,
			code: string,
			price: number,
			status: boolean,
			stock: number,
			category: string,
			thumbnails?: Array<string>
		}
	}
	```

	**_Response (404)_**
	```typescript
	type Response = {
		error: 'Product Not Found',
		description: string
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal Server Error'
	}
	```

### Post
* `/api/products`: creates a new product

	**_Request_**
	```typescript
	type Request = {
		title: string,
		description?: string,
		code: string,
		price: number,
		status: boolean,
		stock: number,
		category: string,
		thumbnails?: Array<string>
	}
	```

	**_Response (201)_**
	```typescript
	type Response = {
		message: 'Product created successfully',
		productId: string
	}
	```

	**_Response (400)_**
	```typescript
	type Response = {
		error: 'Request schema is invalid',
		description: string
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal Server Error'
	}
	```

### Put

* `/api/products/:pid`: updates an existing product

	**_Request_**
	```typescript
	type Request = {
		title?: string,
		description?: string,
		code?: string,
		price?: number,
		status?: boolean,
		stock?: number,
		category?: string,
		thumbnails?: Array<string>
	}
	```

	**_Response (204)_**

	**_Response (400)_**
	```typescript
	type Response = {
		error: 'Request schema is invalid',
		description: string
	}
	```

	**_Response (404)_**
	```typescript
	type Response = {
		error: 'Product not found',
		description: string
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal server error'
	}
	```

### Delete

* `/api/products/:pid`: deletes a product

	**_Response (204)_**

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal server error'
	}
	```

## API Spec - Carts
### Get
* `/api/carts/:cid`: returns one specific cart
	**_Response (200)_**
	```typescript
	type Response = {
		cart: {
			id: string,
			products: {
				[productId]: {
					quantity: number,
					detail: {
						id: string,
						title: string,
						description?: string,
						code: string,
						price: number,
						status: boolean,
						stock: number,
						category: string,
						thumbnails?: Array<string>
					}
				}
			}
		}
	}
	```

### Post
* `/api/carts`: creates a new cart

	**_Request_**
	```typescript
	type Request = {
		[productId]: {
			quantity: number
		}
	}
	```

	**_Response (201)_**
	```typescript
	type Response = {
		message: 'Cart created successfully',
		cartId: string
	}
	```

	**_Response (400)_**
	```typescript
	type Response = {
		error: 'Request schema is invalid',
		description: string
	}
	```

	**_Response (404)_**
	```typescript
	type Response = {
		error: 'Product not found',
		description: string
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal server error'
	}
	```

* `/api/carts/:cid/product/:pid`: add the specified product into the cart
	**_Request_**
	```typescript
	type Request = {
		quantity: number
	}
	```

	**_Response (201)_**
	```typescript
	type Response = {
		message: 'Product added to the cart successfully'
	}
	```

	**_Response (400)_**
	```typescript
	type Response = {
		error: 'Request schema is invalid',
		description: string
	}
	```

	**_Response (404)_**
	```typescript
	type Response = {
		error: 'Cart not found' | 'Product not found',
		description: string
	}
	```

	**_Response (500)_**
	```typescript
	type Response = {
		error: 'Internal server error'
	}
	```
