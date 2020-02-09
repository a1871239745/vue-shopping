module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      //Mock数据
      before(app) {
        //  app.get('请求地址',(req,res)=>{
        //   req:接受的数据
        //   res：返回数据
        //  })
        //注册接口
        //模拟一个已有的数据库账号
        let nameporr = [{ username: '小小邓', password: '123456' }, { username: 'admin', password: '123456' }];

        app.get('/api/register', (req, res) => {
          const { username, password } = req.query;

          const zhuuce = nameporr.find(nameporr => nameporr.username == username)
          console.log(zhuuce)
          if (zhuuce) {
            res.json({
              success: false,
              message: '用户名已存在！'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功！'
            })
          }
          // nameporr.forEach(elem => {
          //   if (elem.username == username) {

          //   } else {

          //   }
          // })
        })

        //登录接口
        let tokenkey = 'xiaoxaiodeng';
        app.get('/api/logo', (req, res) => {
          const { username, password } = req.query;
          let xun = nameporr.filter((v, ss) => {
            if (v.username == username && v.password == password) {
              return v.username;
            } else {
              return 0;
            }
          });
          if (xun.length >= 1) {
            console.log("ssss")
            res.json({
              code: 0,
              message: '登陆成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '用户名或者密码错误!'
            })

          }
        })
        //轮播图数据
        app.get('/api/lunbo', (req, res) => {
          const user = [{
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }];
          res.json({
            user
          })
        })
        //分类导航数据
        app.get('/api/fenglun', (req, res) => {
          const shujv = [[{
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          },
          {
            url: 'https://www.jupindai.com/book/101.html',
            image: 'https://www.jupindai.com/files/article/image/0/101/101s.jpg',
            label: '元尊'
          },
          {
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          },
          {
            url: 'https://www.jupindai.com/book/857.html',
            image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
            label: '武炼巅峰'
          },
          {
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          },
          {
            url: 'https://www.jupindai.com/book/857.html',
            image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
            label: '武炼巅峰'
          },
          {
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          }],
          [{
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          },
          {
            url: 'https://www.jupindai.com/book/857.html',
            image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
            label: '武炼巅峰'
          },
          {
            url: 'https://www.jupindai.com/book/87.html',
            image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
            label: '伏天氏'
          }]

          ];


          res.json({
            shujv
          })
        })
        //分类数据
        app.get('/api/feng', (req, res) => {
          // console.log()
          const type = req.query.type
          switch (type) {
            case '0':
              res.json({
                data: [{
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/101.html',
                  image: 'https://www.jupindai.com/files/article/image/0/101/101s.jpg',
                  label: '元尊'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/101.html',
                  image: 'https://www.jupindai.com/files/article/image/0/101/101s.jpg',
                  label: '元尊'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/101.html',
                  image: 'https://www.jupindai.com/files/article/image/0/101/101s.jpg',
                  label: '元尊'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '武炼巅峰'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '伏天氏'
                }]
              })
              break;
            case '1':
              res.json({
                data:
                  [{
                    url: 'https://www.jupindai.com/book/87.html',
                    image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                    label: '水仙花数据'
                  },
                  {
                    url: 'https://www.jupindai.com/book/857.html',
                    image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                    label: '下行爱上我'
                  },
                  {
                    url: 'https://www.jupindai.com/book/87.html',
                    image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                    label: '啦啦啦啦'
                  }]
              })
              break;
            case '2':
              res.json({
                data: [{
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '曾多次'
                },
                {
                  url: 'https://www.jupindai.com/book/857.html',
                  image: 'https://www.jupindai.com/files/article/image/0/857/857s.jpg',
                  label: '上父采访时1'
                },
                {
                  url: 'https://www.jupindai.com/book/87.html',
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '从大V发'
                }]
              })
              break;
            default:
              res.json({
                data: [{
                  image: 'https://www.jupindai.com/files/article/image/0/87/87s.jpg',
                  label: '无数据'
                }]
              })
              break;
          }
        })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
