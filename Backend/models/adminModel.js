// const Address = require("./definations/address");
const { models } = require("./index");

module.exports = {
  creatUser: async (body) => {
    try {
      console.log("model",body)
      return await models.User.create({ ...body });
    }catch (error){
      return error
    }
  },
  getAllUsers: async () => {
    return await models.User.findAll();
  },
  getUserById: async (id) => {
    return await models.User.findByPk(id);
  },
  updateUser: async (body) => {
    try {
      return await models.User.update(
        { ...body },
        {
          where: {
            id: body.id,
          },
        }
      );
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (id) => {
    try {
      return await models.User.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error;
    }
  },
};
