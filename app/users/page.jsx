import AuthGuard from "@/commonComponents/AuthGuard";

const Users = () => {
  return (
    <AuthGuard>
      <div>Gestion de usuarios</div>
    </AuthGuard>
  )
}

export default Users;
