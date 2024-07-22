import { getUser } from '@/shared/api/explore'
import { useQuery } from '@tanstack/react-query'

export default function useGetUser() {
  const { data } = useQuery({
    queryKey: ['user', 'test'],
    queryFn: () => getUser()
  })
  return data
}
