const esAdmin = (req, res, next) => {
    if(req.user.role !== 'admin_user'){
        return res.status(401).json({
            msg: 'No es admin'
        })
    }
    next();
}

module.exports=esAdmin