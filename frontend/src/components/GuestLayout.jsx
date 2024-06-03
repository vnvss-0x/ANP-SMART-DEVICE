import { Navigate, Outlet } from "react-router-dom";
import AnpLogo from "../assets/anp-logo.svg";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
      const { userToken } = useStateContext();

      if (userToken) {
        return <Navigate to="/" />
      }

    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={AnpLogo}
                            alt="Anp"
                        />
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
}
