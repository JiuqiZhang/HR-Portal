import * as React from 'react';


export default function HRContent(props) {
  if (props.category === "Employee Profiles"){
    return <div>Employee Profiles</div>
  }
  if (props.category === 'Visa Status Management') {
    return <div>Visa Status Management</div>
  } 
  if (props.category === 'Hiring Management'){
      return <div>Hiring Management</div>
  }
  if (props.category === 'Housing Management'){
    return <div>Housing Management</div>
}
}
