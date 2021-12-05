const db = require('./dataModel.js');
// const { locals } = require('./server.js')

const dataController = {
  //
  async postData(req, res, next) {
    try {
      const user = req.body;
      const params = [
        user.username,
        user.password,
        user.countryId
      ]
      const sqlStr = 'INSERT INTO axolotl (username, password, paises) VALUES ($1, $2, $3);';
      const data = await db.query(sqlStr, params);
      res.locals.data = data
      return next();
    } catch (err) {
      return next(err);
    }
  },

  //
  async getData(req, res, next) {
    try {
      const sqlStr = 'SELECT paises FROM axolotl;'
      const data = await db.query(sqlStr);
      res.locals.data = data.rows[0].paises
      return next()
    } catch (err) {
      return next(err);
    }
  },

  //
  async updateData(req, res, next) {
    try{  
      // console.log('res.locals.data & res.body.countryId: ', res.locals.data, req.body.countryId);
      const updateCountries = [[...res.locals.data, req.body.countryId]];
      console.log('line 40 console: ', updateCountries);
      const sqlStr = `UPDATE axolotl SET paises = ($1);`;  
      const data = await db.query(sqlStr, updateCountries)
      res.locals.data = data
      console.log('res.locals.data: ',res.locals.data)
      
      // console.log('line 44 console:', data)
      return next();
    } catch (err){
      // console.log('Error for updateData:', err)
      return next(err);
    }
  },

  //
  async deleteData(req, res, next) {
    // const sqlStr = 'DELETE FROM axolotl WHERE ';

    next();
  },
};

module.exports = dataController;
