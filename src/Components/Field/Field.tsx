

import { url } from 'inspector';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Field.css'
import { Fieldarr, Fieldarr2, Fieldarr3, Fieldarr4, Fieldarr5 } from './Fieldarr'

// var Recaptcha = require('react-recaptcha');

const Field = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isShown, setIsShown] = useState(false)
  const handleClick = () => {
    setIsShown(current => !current)
  }
  const [resumeError, setResumeError] = useState("")
  const [resumeLabel, setResumeLabel] = useState("")
  const [value, setValue] = useState()
  

  const onInputChange = (e:React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.files && e.currentTarget.files[0]){
        console.log(e.currentTarget.files[0].name)
        setResumeLabel(e.currentTarget.files[0].name)
        
        if(e.currentTarget.files[0].type !== 'application/pdf')
            setResumeError('Invalid File Format')
        else if(e.currentTarget.files[0].size > 5*1024*1024)
            setResumeError('File size is greater than 5MB')
        else 
            setResumeError('')
    }else{
        setResumeError('This field is required')
    }
}
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="fieldSection">
        <div className='container'>
          <div className='main'>
            <h4 className="headingField">Submit your application</h4>
            <div className="inputGroup">
              <p className="inputName">Resume/CV<span className='starReq'>*</span></p>

              <div className="disValue">
                <button className="inputValue" style={{ minWidth: "250px" }}><i className="fa fa-paperclip" /> Attach RESUME/CV</button>
                <input className="inputFile" type="file" style={{ textAlign: "left" }}  {
                  ...register("attach",{ 
                    required:{
                      value:true,
                      message:"Please add Attachment"
                    }, 
                  })
                } onChange={onInputChange}/>
                {<p style={{color:"red"}}>{resumeError}</p>}
                {errors.attach && <p style={{color:"red"}}>{errors.attach?.message}</p>}
              </div>
            </div>

            {
              Fieldarr.map((item, i) => {
                // console.log("item",!item.required);

                return (
                  <div key={i}>

                    <div className="inputGroup">
                      <p className="inputName" >
                        {item.label}
                        {/* {
						item.required && <span className='starReq'>*</span>
					} */}

                        {item.required === true ?
                          (
                            <><span className='starReq'>*</span></>
                          ) : null}
                      </p>
                      <div className="disValue">
                        <input className='inputValue' type={item.type}
                           {...register(`${item.label}`,{ required:{
                            value:item.required ?? false,
                            message:"Please fill this input"
                          },minLength:{
                            value:item.minLength ?? 0 ,
                            message:"Invalid"
                          },pattern: {
                            value: item.pattern ,
                            message: item.errorMessage ?? " "
                          }
                           }
                          )} 
                            />
                           {
                            errors[item.label] && 
                            <p style={{color:"red"}}>
                              {errors[item.label]?.message}
                            </p>
                          }
                          
                      </div>

                      
                    </div>
                  </div>
                )
              })
            }

            <div className="inputGroup">
              <p className="inputName">Phone2</p>

              <div className="disValue">
              <PhoneInput
                defaultCountry='IN'
                withCountryCallingCode={true}
                smartCaret={true}
                style={{direction:"ltr"}}
                placeholder="Enter phone number"
                value={value}
                onChange={()=>{}} {...register("phone" ,{
                  minLength:{
                    value:11,
                    message:"Wrong Number"
                  }
                })}/>
                {errors.phone && <p style={{color:"red"}}>{errors.phone?.message}</p>}
                      
              </div>
            </div>

            <h4 className="headingField">Links</h4>

            {
              Fieldarr2.map((item, i) => {
                return (
                  <div key={i}>

                    <div className="inputGroup">
                      <p className="inputName">{item.label}</p>
                      <div className="disValue">
                        <input className='inputValue' type={item.type} 
                        {...register(`${item.input}`, { pattern:{
                          value:item.pattern,
                          message:"Invalid URL "  
                        }
                        })} />
                        {errors[item.label] && <p style={{color:"red"}}>{errors[item.label]?.message}</p>}
                      </div>
                    </div>

                  </div>
                )
              })}

            {
              Fieldarr3.map((item, i) => {
                return (
                  <div key={i}>
                    <h4 className="headingField">{item.heading}</h4>

                    <div className="inputGroup2">
                      <p className="inputName">{item.label}</p>
                      <div className="disValue2">
                        <input className='inputValue' placeholder={`${item.placeholder}`}
                          {...register(`${item.input}`)} />
                      </div>
                    </div>

                  </div>
                )
              })}

            {
              Fieldarr4.map((item, i) => {
                return (
                  <div key={i}>
                    <h4 className="headingField">{item.heading}</h4>

                    <div className="inputGroup2">
                      <div className="disValue2">
                        <textarea className='inputValue' placeholder={`${item.placeholder}`}
                          style={{ minHeight: "120px" }} {...register(`${item.label}` ,
                            {
                              minLength:{
                                value:item.minLength ?? 0 ,
                                message:"Invaild add more text"
                              }
                            })}  
                          // minLength:{
                            //   value:item.minLength ?? 0,
                            //   message:"Add Some More Info"
                            // }
                          />
                          {errors[item.label] && <p style={{color:"red"}}>{errors[item.label]?.message}</p>}
                      </div>
                    </div>

                  </div>
                )
              })}

            <hr />
            <p className='' style={{ textAlign: "left" }}>
              <strong>U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION</strong>
              (Completion is voluntary and will not subject you to adverse treatment)
            </p>
            <br />
            <p className='' style={{ textAlign: "left" }}>
              Our company values diversity. To ensure that we comply with reporting requirements and to learn more about how we can increase diversity in our candidate pool, we invite you to voluntarily provide demographic information in a confidential survey at the end of this application. Providing this information is optional. It will not be accessible or used in the hiring process, and has no effect on your opportunity for employment.
            </p>

            {
              Fieldarr5.map((item, i) => {
                return (
                  <div key={i}>

                    <div className="inputGroup3">
                      <p className="inputName" onClick={item.label === 'Race' ? handleClick : () => { }}>
                        {item.label}
                          {/* <i className='fa fa-info' /> */}
                      </p>
                      <div className="disValue3">
                        <select className='inputValue3' {...register(item.label)} >
                          {
                            item.options.map((subitems, j) => {
                              return (
                                // <div key={j}>
                                <option key={j}  >{subitems}</option>
                                // </div>
                              )
                            })}


                        </select>
                        <ul>
                          {isShown &&
                            item.dataHead?.map((item, pos) => {
                              return (
                                <li key={pos} className="" style={{ listStyleType: "none", textAlign: "left" }}>
                                  <>
                                    <div className="dataHead">{item.head}</div>
                                    <div className="dataPara">{item.desc}</div>
                                  </>
                                </li>
                              )
                            })
                          }

                        </ul>


                      </div>
                    </div>

                  </div>
                )
              })}

            {/* <Recaptcha sitekey="xxxxxxxxxxxxxxxxxxxx" />
			<iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdWHmUeAAAAAPyHlfKyffhTuD8HUy3uZ_cmZkEX&amp;co=aHR0cHM6Ly9ibGlzc2Z1bC12YXJhaGFtaWhpcmEtNzE5YjMxLm5ldGxpZnkuYXBwOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=Ixi5IiChXmIG6rRkjUa1qXHT&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=4qidkbytvh5c" width="304" height="78" role="presentation" name="a-sktz8q2mwd6r"  scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
			 */}
            <button className="submitButton" type='submit'>Submit Applicaton</button>





          </div>
        </div>
      </div>
    </form>
  )
}

export default Field;