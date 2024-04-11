import Title from "../Title";
import { Box,Drawer,IconButton,List,ListItem,
  ListItemButton,ListItemIcon,ListItemText,Typography } from '@mui/material';
import "./widget.scss";





const Widget = ({title,list,search,scrollbarContent}) => {

  
  return (
    <div className="widget">
        <div className="color">
        <h2 className="headers">{title}</h2>
        </div>
      <div className="widget_top">
      </div>
      <div className="body">
        <div className="search">{search}</div>
        <div className="scroll">{scrollbarContent}</div>
        <h5 className="list">{list}</h5>
      </div>
      
    </div>

//     <List>{navItem.map(({text,icon}) =>{
//       if(!icon){
//           return(
//               <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem",fontSize:"10px"}}>
//                   {text}
//               </Typography>
//           )
//       }
//       const lcText = text.toLowerCase();

//       return(
//           <ListItem key={text} disablePadding>
//               <ListItemButton onClick={()=>{navigate(`/${lcText}`);
//               setActive(lcText);
//           }}
//           sx={{backgroundColor:active === lcText ? "#ffeb39" : "transparent",
//           color:active === lcText ? "#555":"#555555"}}
//           >
//               <ListItemIcon sx={{ml:"2rem", color:active === lcText ? "#555":"#555555" }}>
//                   {icon}
//               </ListItemIcon>
//               <ListItemText primary={text}/>
//               {active === lcText && (<ChevronRightOutlinedIcon sx={{ml: "auto"}}/>)}
//           </ListItemButton>
//            </ListItem>
//       )
//   })}</List>
    
  );
};

export default Widget;
