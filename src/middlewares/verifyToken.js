import jwt from 'jsonwebtoken'

function verifyToken(req, res, next) {
    const token = req.header('Authorization')

    if (!token) 
        return res.status(401).json({message: `Token não fornecido`})

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err)
            return res.status(401).json({message: `Token inválido`})

        req.user = decoded

        next()
    })
}

export default verifyToken