interface GetUserResData {
  id: string
  nickname: string
  image: string
}

export async function getUser(): Promise<GetUserResData> {
  console.log('getuser')
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    next: {
      tags: ['user', 'test']
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
