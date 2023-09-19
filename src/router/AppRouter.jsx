import { Route, Router } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"


export const AppRouter = () => {
  return (
    <Router>
        <Route path="/auth/*" element={ <AuthRoutes />} />
    </Router>
  )
}
