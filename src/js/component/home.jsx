import React, { useState } from "react";


//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor] = useState("yellow");


	return (
		
		<div className="container d-flex justify-content-center align-items-center">
			<div className="traffic-light">
				<div className="container bg-dark" style={{width:"70px", height:"185px"}}>
					
					<div >
						<button 
							type="button" 
							onClick={() => setSelectedColor ("red")}
							className={`light red btn btn-danger ${(selectedColor === "red") ? "glow" : ""}`} 
							style={{width:"50px", height:"50px", borderRadius:"50px", marginTop:"5px", marginBottom:"5px"}}></button>
					</div>
					<div>
						<button 
							type="button" onClick={() => setSelectedColor ("yellow")}
							className={`light yellow btn btn-warning ${(selectedColor === "yellow") ? "glow" : ""}`} 
							style={{width:"50px", height:"50px", borderRadius:"50px", marginTop:"5px", marginBottom:"5px"}}></button>
					</div>
					<div>
						<button 
							type="button" onClick={() => setSelectedColor ("green")}
							className={`light green btn btn-success ${(selectedColor === "green") ? "glow" : ""}`} 
							style={{width:"50px", height:"50px", borderRadius:"50px", marginTop:"5px", marginBottom:"5px"}}></button>
					</div>
				</div>
			</div>	
		</div>
	);
};

export default Home;
