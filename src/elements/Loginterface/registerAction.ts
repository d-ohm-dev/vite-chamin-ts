/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "react-router-dom";
import { createUser } from "../../models/db";


// Recibimos el "request" ver: https://reactrouter.com/en/main/route/action#request
export async function registerFormAction({ request }:any) {


      const { searchParams } = new URL(request.url);
  
      // Ver "https://developer.mozilla.org/en-US/docs/Web/API/Request" para mas info del obeto "Request"
  
      // Usamos el metodo "formData" del obj "request", que nos devuelve un objeto con la data del body
      const formData = await request.formData();
      console.log(`This is:  ${formData.values}`);
      /**
       * 
       * en este caso se usa un metodo ficticio "createNote" para el ejemplo
       * con esto queremos conseguir que se grabe la nueva nota en la lista de notas
       * y que esta se vea en la pantalla, los "Action" mandan a llamar todos los "Loaders" de 
       * las rutas activas (las que se ven en pantalla) antes del render
      */
      const { id } = await createUser(formData.get("username"), formData.get("email"), formData.get("password"));
      
      return redirect(`/register/${id}?${searchParams}`);
  }