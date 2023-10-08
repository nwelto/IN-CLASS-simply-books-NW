/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '../utils/context/authContext';

function Home() {
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  return (
    <div className="text-center my-4">
      Hello! {user.displayName}
    </div>
  );
}

export default Home;
