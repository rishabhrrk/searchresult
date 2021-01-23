require("dotenv").config();
const mysqlx = require("@mysql/xdevapi");

class DB {
    constructor(){
        this.dbobject = JSON.stringify(process.env.DB_USER_OBJECT)
        this.mytable =  mysqlx
                            .getSession(this.dbobject)
                            .then((session) => {
                                console.log(`Session is here too`);
                                session.getSchema("searchable").getTable("Names");
                                return myTable;
                            })
                            .catch((err) => {
                                console.log(err);
                            })
        console.log(this.mytable);
    }

  fetch(key) {
      console.log(`I am in fetch ${key}`)
    
    // return new Promise((resolve, reject) => {
     
    //     this.myTable
    //         .select(["Name", "SUM(Count)"])
    //         .where("name like :n")
    //         .groupBy("name")
    //         .orderBy("SUM(Count) DESC")
    //         .limit("7")
    //         .bind("n", "%" + key + "%")
    //         .execute();
    //         resolve();
        // .then((results) => {
        //   resolve(results.fetchAll());
        // })
        // .catch((err) => {
        //   reject(`Error: ${err}`);
        // });

  }
}
module.exports = new DB();
