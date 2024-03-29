export const products = [
    {
        id: 1,
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: 2,
        name: 'samsung s21',
        price: 800,
        category: 'celular',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803',
        stock: 16,
        description: 'Descripcion de Samsung s21'
    },
    {
        id: 4,
        name: 'Ipad 9na generacion',
        price: 1500,
        category: 'tablet',
        img: 'https://m.media-amazon.com/images/I/61d46oYQgdL._AC_SX425_.jpg',
        stock: 40,
        description: 'Descripcion de Ipad 9na'
    },
    {
        id: 3,
        name: 'Ipad 8va generacion',
        price: 1200,
        category: 'tablet',
        img: 'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw',
        stock: 30,
        description: 'Descripcion de Ipad'
    }
]




export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((res, rej) =>
    setTimeout( () => {
        res(products.filter(prod=> prod.category===category))
    }, 500)
    )
}

export const getProductById = (id) => {
    return new Promise((res,rej) => 
        setTimeout(() =>  {
            res(products.find(prod => prod.id.toString() === id))
        }, 500)
    )
}