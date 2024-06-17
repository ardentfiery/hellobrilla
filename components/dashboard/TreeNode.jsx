import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Collapse } from '@mui/material'; // Material UI for components
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const TreeNode = ({ item, expanded, onSelect, index }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleMenu = () => setIsExpanded(!isExpanded);

  const handlePress = (index) => {
    onSelect(item);
    if (item.children) {
      toggleMenu();
    }
  };

  return (
    <>
      <ListItem onClick={()=>{
        handlePress(index)
      }}>
        {item.icon && (
          // Use your preferred icon library here (e.g., Material UI icons)
         <img className='h-[18px] w-[18px] mr-4'
          src={item.icon} alt="" />
        )}
        <ListItemText primary={item.label} />
        {item.children && (
          <IconButton onClick={toggleMenu}>
            {isExpanded ? <IoMdArrowDropdown /> : <IoCaretForwardOutline />}  {/* Simple expand/collapse icons */}
          </IconButton>
        )}
      </ListItem>
      {isExpanded && item.children && (
        <Collapse in={isExpanded}>
          <List disablePadding dense>
            {item.children.map((child,index) => (
              <TreeNode key={child.label} item={child}  expanded={false} onSelect={onSelect} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default TreeNode;
