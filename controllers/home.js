module.exports = {
    getIndex: (req,res)=>{
        res.render('./pages/index.ejs', {title: 'Manger on Duty Login'})
    }
}