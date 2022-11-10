import './Field.css'
import { Fieldarr, Fieldarr2, Fieldarr3, Fieldarr4, Fieldarr5 } from './Fieldarr'


const Field = () => {
	return(
		<>
		<div className="fieldSection">
		<div className='container'>
		<div className='main'>
		<h4 className="headingField">Submit your application</h4>
		<div className="inputGroup">
			<p className="inputName">Resume/CV</p>
			<div className="disValue">
				<button className="inputValue">ATTACH RESUME/CV</button>
			</div>
		</div>
			
				{  
					Fieldarr.map((item)=>{
				return(
					<>
					
					<div className="inputGroup">
				<p className="inputName">{item.label}</p>
				<div className="disValue">
					<input className='inputValue' />
				</div>
			</div>

				</>
				)
				})}
		
			<h4 className="headingField">Links</h4>

			{  
					Fieldarr2.map((item)=>{
				return(
					<>
					
					<div className="inputGroup">
				<p className="inputName">{item.label}</p>
				<div className="disValue">
					<input className='inputValue' />
				</div>
			</div>

				</>
				)
				})}

			{  
					Fieldarr3.map((item)=>{
				return(
					<>
					<h4 className="headingField">{item.heading}</h4>

					<div className="inputGroup2">
						<p className="inputName">{item.label}</p>
						<div className="disValue2">
							<input className='inputValue' placeholder ={`${item.placeholder}`} />
						</div>
					</div>

				</>
				)
				})}

			{  
					Fieldarr4.map((item)=>{
				return(
					<>
					<h4 className="headingField">{item.heading}</h4>

					<div className="inputGroup2">
						<div className="disValue2">
							<textarea className='inputValue' placeholder ={`${item.placeholder}`} 
							style={{minHeight:"120px"}} />
						</div>
					</div>

				</>
				)
				})}

			<hr/>
			<p className='' style={{textAlign:"left"}}>
				<strong>U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION</strong>
				  (Completion is voluntary and will not subject you to adverse treatment)
			</p>
			<br />
			<p className='' style={{textAlign:"left"}}>
			Our company values diversity. To ensure that we comply with reporting requirements and to learn more about how we can increase diversity in our candidate pool, we invite you to voluntarily provide demographic information in a confidential survey at the end of this application. Providing this information is optional. It will not be accessible or used in the hiring process, and has no effect on your opportunity for employment.
			</p>

			{  
					Fieldarr5.map((item)=>{
				return(
					<>

					<div className="inputGroup3">
						<p className="inputName">{item.label}</p>
						<div className="disValue3">
							<select className='inputValue3' >
							{  
								item.options.map((subitems)=>{
									return(
									<>
										<option value={`$subitems.options`}>{subitems}</option>
									</>
				)
				})}

							</select>
							
						</div>
					</div>

				</>
				)
				})}
			
			<button className="submitButton">Submit Applicaton</button>


      		

    
		</div>
		</div>
		</div>
		</>
	)
} 

export default Field;