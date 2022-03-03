const list = [
    {
        nick:"Allen1",
        phone:15532298716,
        name:"开课吧",
        subject:"计算机",
        job:"前端",
        year:10,
        updateTime:'2021-10-29'
    },
    {
        nick:"Allen2",
        phone:15532298716,
        name:"开课吧",
        subject:"计算机",
        job:"前端",
        year:10,
        updateTime:'2021-10-29'
    },
    {
        nick:"Allen3",
        phone:15532298716,
        name:"开课吧",
        subject:"计算机",
        job:"前端",
        year:10,
        updateTime:'2021-10-29'
    },
    {
        nick:"Allen4",
        phone:15532298716,
        name:"开课吧",
        subject:"计算机",
        job:"前端",
        year:10,
        updateTime:'2021-10-29'
    },
]
module.exports = [
    {
      url: '/vue-admin-template/test/list',
      type: 'get',
      response: config => {
        return {
          code: 20000,
          data: {
            total: list.length,
            items: list
          }
        }
      }
    }
  ]