'use client'

import useGetUser from '../api/use-get-user'

function Explore() {
  const user = useGetUser()
  return (
    <>
      <div>explore page</div>
      <div>{user?.id}</div>
      <div>{user?.nickname}</div>
      <img src={user?.image} alt="" />
    </>
  )
}
export default Explore
