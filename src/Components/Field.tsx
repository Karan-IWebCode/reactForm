import './Field.css'
import { Fieldarr } from './Fieldarr'

const Field = () => {
	return(
		<>
		<div className='container'>
		<div className='main'>
			
				{  
					Fieldarr.map((item, pos)=>{
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
				})};
		</div>
		</div>
		</>
	)
} 

export default Field;