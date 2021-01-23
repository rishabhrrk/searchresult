require("dotenv").config();
const Express = require('express')
const App = Express()
const mysqlx = require('@mysql/xdevapi')


App.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

App.get('/',(req,res) => {
    var myTable;
    mysqlx
        .getSession({
            user: 'root',
            host: 'localhost',
            password: 'password'
        })
        .then(function (session) {
            myTable = session.getSchema('searchable').getTable('Names');
            return myTable;
        })
        .then(() => {
            let name = req.query['name'];
            return myTable
                .select(['Name', 'SUM(Count)'])
                .where('name like :n')
                .groupBy('name')
                .orderBy('SUM(Count) DESC')
                .limit('7')
                .bind('n', '%'+name+'%')
                .execute();
        })
        .then((results) => {
            res.send(results.fetchAll());
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
        })
});

App.listen(8000, () => {
    console.log(`Yes, I am connected!!! at port 8000`)
});