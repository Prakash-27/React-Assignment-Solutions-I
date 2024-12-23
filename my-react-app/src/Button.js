// 2. Create a component named "Button" that takes two props - "text" and "onClick". 
// The component should display a button element with the given text and call the onClick function when clicked.

function Button(props) {
    return (
        <div style= {{display: "flex", justifyContent: "center"}}>
           <button onClick={props.onClick} style = {{
            textAlign: "center", 
            color: "black", 
            backgroundColor: "pink", 
            fontSize: "25px", 
            fontWeight: "500", 
            padding: "5px 10px",
            borderRadius: "5px", 
            border: "none", 
            
            }}>
               {props.text}
           </button>
        </div>
    );
}

export default Button;