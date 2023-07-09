import { Profile } from "./profile/Profile.jsx";
import user from './profile/user.json'

export const App = () => {
 return (
    <>
    <Profile
         user={user}  
    />
     
    </>  
  );
};
