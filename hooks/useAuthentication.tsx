import { SECURE_TOKEN, getValueFor } from "@/utils/scoreStorage";
import { useEffect, useState } from "react";

const useAuthentication = (): boolean | null => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const value = await getValueFor(SECURE_TOKEN);
      setIsAuthenticated(value ? true : false);
    };

    checkAuthentication();
  }, []);

  return isAuthenticated;
};

export default useAuthentication;
