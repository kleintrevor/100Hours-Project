module.exports = {
    getIndex: (req,res)=>{
        const userData = req.session.user;
        res.render('index.ejs', {title: 'Manger on Duty Login', user: req.user})
    }
}