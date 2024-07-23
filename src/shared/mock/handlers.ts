import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'leoturtle', nickname: '레오', image: faker.image.avatar() }
]

export const handlers = [
  http.get('/api/user', () => {
    console.log('유저정보')
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  })
  // http.post('/api/users', async ({ request }) => {
  //   // return HttpResponse.text(JSON.stringify('user_exists'), {
  //   //   status: 403,
  //   // })
  //   return HttpResponse.text(JSON.stringify('ok'), {
  //     headers: {
  //       'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
  //     }
  //   })
  // })
]
