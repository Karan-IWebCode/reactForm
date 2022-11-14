
import 'react-phone-number-input/style.css'
import { Field, FieldErrorsImpl, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import './Field1.css'
import { Fieldarr } from '../Field/Fieldarr'

interface Iprops {
  register: UseFormRegister<FieldValues>
  err:Partial<FieldErrorsImpl<{[x: string]: any;}>>
}

const Field1 = ({ register,err }: Iprops) => {
  console.log("err",err)

  return (
    <>

      {
        Fieldarr.map((item, i) => {
          // console.log("item",!item.required);

          return (
            <div key={i}>

              <div className="inputGroup">
                <p className="inputName" >
                  {item.label}
                  {
						               item.required && <span className='starReq'>*</span>
					               }

                  {item.required === true ?
                    (
                      <><span className='starReq'>*</span></>
                    ) : null}
                </p>
                <div className="disValue">
                  <input className='inputValue' {...register(item.label,{
                    required:{
                      value:item.required ?? false,
                      message:'This field is required'
                    },
                    minLength:{
                      value:item.minLength ?? 0,
                      message:'Min length should be 10 characters'
                    },
                    pattern:{
                      value:item.pattern,
                      message:item.errorMessage ?? ''
                    }
                  })}/>
                  {err[item.label] && <p style={{color:"red"}}>{`${err[item.label]?.message}`}</p>}
                  {/* <input className='inputValue'
                    {...register(`FULL NAME`, {
                      required: {
                        value: item.required ?? false,
                        message: "Please fill this input"
                      }, minLength: {
                        value: item.minLength ?? 0,
                        message: "Invalid"
                      }, pattern: {
                        value: item.pattern,
                        message: item.errorMessage ?? " "
                      }
                    }
                    )}
                  /> */}
                  {/* {
                            errors[item.label] && 
                            <p style={{color:"red"}}>
                              {errors[item.label]?.message}
                            </p>
                          } */}

                </div>


              </div>
            </div>
          )
        })
      }
    </>

  );
}

export default Field1;