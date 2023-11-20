import { useAuth } from "./auth";
import { Link } from "react-router-dom";

export  function ProtectRouter({children}) {

const { user,loading }= useAuth();

if (loading) return <h1>Loading</h1>;

if (!user) return <Link to='/login' />;

  return <>{children}</>
}

export default ProtectRouter;