import CreateForm from "../components/CreateForm"
export default function CreateProduct(){
    return(
        <div>
          <h1 className='text-4xl font-extrabold dark:text-white mb-10'>Add New Product</h1>
          <CreateForm/>
        </div>
    )
}