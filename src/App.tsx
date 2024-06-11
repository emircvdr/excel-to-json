import excelToJson from "./assets/exceltojson"
import { customAlphabet, nanoid } from 'nanoid'



interface Main {
  _id: string,_uid: string,_createdAt: string,_updatedAt: string,_permissions: string,id: string,program_name:string,program_procedure:string,program_type:string,program_type_id:string,program_modules:string,program_modules_id:string,program_material:string,tenant_id:string,is_active:boolean,is_program_module_defined:boolean,is_deleted:boolean

}
interface MainChildren {
  _id: string,_uid: string,_createdAt: string,_updatedAt: string,_permissions: string,id: string,program_id:string,target_digit_name:string,tenant_id:string,is_deleted:boolean

}
const App = () => {
  const nanoid = customAlphabet('1234567890abcdefghıjklmnopqrstuvwxyz', 12)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
    if (file) {
      excelToJson(file, (data) => {
        const schema:Main[] = []
        const schemaChildren:MainChildren[] = []
        data?.forEach((row:string[],i) => {
          const mainId= nanoid()
          const digitId= nanoid()
          const headerName= "MEB Zihinsel Engelliler Destek Programı"
          const headerId= "jkeg7o8m22osgbiq64ok"
          const moduleName= "OKUMA YAZMA"
          const moduleId= "6vx95kylif9rrzbyn3rd"
          const tenantId= "66265085322038f0a171"
          const targetName= row[0]


          schema.push({
            _id: "",
            _uid: mainId,
            _createdAt: "",
            _updatedAt: "",
            _permissions: "[\"read(\\\"user:6626507ce7724e489f85\\\")\",\"update(\\\"user:6626507ce7724e489f85\\\")\",\"delete(\\\"user:6626507ce7724e489f85\\\")\"]",
            id: mainId,
            program_name: targetName,
            program_procedure: targetName,
            program_type: headerName,
            program_type_id: headerId,
            program_modules: moduleName,
            program_modules_id: moduleId,
            program_material: "",
            tenant_id: tenantId,
            is_active: true,
            is_program_module_defined: true,
            is_deleted: false  
          })
         
          row.forEach((cell, j) => {
            if (j > 1) {
              schemaChildren.push({
                _id: "",
                _uid: "",
                _createdAt: "",
                _updatedAt: "",
                _permissions: "[\"read(\\\"user:6626507ce7724e489f85\\\")\",\"update(\\\"user:6626507ce7724e489f85\\\")\",\"delete(\\\"user:6626507ce7724e489f85\\\")\"]",
                id: nanoid(),
                program_id: schema[i].id,
                target_digit_name: cell,
                tenant_id: tenantId,
                is_deleted: false
              })
            }
          })
        
      })
      console.log(schema, "sema")
      console.log(schemaChildren,"semacocuk")
    })
  }
}
  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default App