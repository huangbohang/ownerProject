
const tokens = {
  admin: {
    token: 'admin-token-fkngklengoneknaweklg'
  },
  editor: {
    token: 'editor-token-5646146456456465'
  }
}

const users = {
  [tokens.admin.token]: {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578559964024&di=7d6be3e61dd564b0992d42ea06d63eae&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cc5ccbgy1ffnl22i74mg20dw0j7x0u.jpg',
    name: 'Super Admin'
  },
  [tokens.editor.token]: {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const userAccount = {
  admin(val) {
    return val === '123456'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username, password } = config.body
      const token = tokens[username] || tokens['editor']
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
      const usr_type = userAccount[username]
      if (usr_type && !usr_type(password)) {
        return {
          code: 403,
          messgae: '密码错误'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]
      console.log(config)
      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
