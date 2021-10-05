import { ResponsiveContainer } from 'recharts';
//import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';

function RadialBarChartComponent({userId}) {
  //const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}/performance`)
  //console.log(data)
  
  const isLoading = true

  //if (error) {
  //  return (
  //    <Loader/>
  //  )
  //}

  if (isLoading) {
    return (
        <Loader />
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
        
    </ResponsiveContainer>
  );
}

export default RadialBarChartComponent