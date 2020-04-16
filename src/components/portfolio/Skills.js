import React from 'react';
import '../Mastersheet.css';
import { Container, Paper } from '@material-ui/core';

class Skills extends React.Component{
    render(){
        const { skills,categories } = this.props;
        console.log(this.props);
        return(
            
           
                    <Paper elevation={3} style={{backgroundColor:'aliceblue'}}>
                    {categories && categories.map(category=>{
                        const skillsCategory = skills.filter(skill=>skill.category === category);
                        if(skillsCategory.length > 0){
                            return (
                                <div style={{paddingTop:"5px",wordWrap:"break-word",paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>
                                   {(category==='Developer' && skillsCategory.length > 0)?(
                                       skillsCategory.map(skill=><a href="#" className={skill.icon+" colored"} style={{fontSize:"40px",textDecoration:"none"}} title={skill.name}/>)
                                   ):(null)}
                                   
                                   {(category==='Designer' && skillsCategory.length > 0)?(
                                       skillsCategory.map(skill=><img src={skill.icon} title={skill.name}/>)
                                   ):(null)}
                                   
                                   {(category==='Filmmaker' && skillsCategory.length > 0)?(
                                        skillsCategory.map(skill=><img src={skill.icon} title={skill.name}/>)
                                   ):(null)}
                                </div>
                            )
                    }})}
                    </Paper>
        )
    }
}

export default (Skills);





/*

                    <div style={{paddingTop:"5px",wordWrap:"break-word",paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>
                    {skills && skills.map(skill=>{
                        switch (skill.category){
                            case 'Developer':
                                return <a href="#" className={skill.icon+" colored"} style={{fontSize:"40px",textDecoration:"none"}}/>
                            case 'Designer':
                                return <img src={skill.icon}/>
                            case 'Filmmaker':
                                return <img src={skill.icon}/>
                        }
                    })}

*/



