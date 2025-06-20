import AuthGuard from "@/commonComponents/AuthGuard";
import Form from "./components/Form";


const Dispositivos = () => {
  return (
    <AuthGuard>
      <div className="max-w-7xl mx-auto px-3 py-8 text-gray-800">
        <h1 className="text-center ">Dispositivos</h1>
        <div className="flex flex-row sm:flex-nowrap flex-wrap gap-2">
          <div className="sm:basis-3/10 w-100">
            <Form />
          </div>
          <div className="sm:basis-3/4 w-100 border">
            talba
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
export default Dispositivos;

