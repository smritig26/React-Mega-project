import React from "react";
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props

}){
    
    return(
        // <div>Button</div>
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props5rdsa1}>
            {children}
        </button>
    )
}
export default Button;