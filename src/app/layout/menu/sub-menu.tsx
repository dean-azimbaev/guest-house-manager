import { ReactElement, ReactNode } from "react";
import {
  List,
  MenuItem,
  ListItemIcon,
  Typography,
  Collapse,
  Tooltip,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSidebarState } from "react-admin";

export interface Props {
  dense: boolean;
  handleToggle: () => void;
  icon: ReactElement;
  isOpen: boolean;
  name: string;
  children: ReactNode;
  expandIcon?: ReactElement;
}

export const SubMenu = (props: Props) => {
  const { handleToggle, isOpen, name, icon, children, dense, expandIcon } =
    props;

  const [sidebarIsOpen] = useSidebarState();

  const header = (
    <MenuItem dense={dense} onClick={handleToggle}>
      <ListItemIcon sx={{ minWidth: 5 }}>
        {isOpen ? expandIcon || <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {name}
      </Typography>
    </MenuItem>
  );

  return (
    <div>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip title={name} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          sx={{
            "& .MuiMenuItem-root": {
              transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
              paddingLeft: (theme) =>
                sidebarIsOpen ? theme.spacing(4) : theme.spacing(2),
            },
          }}
        >
          {children}
        </List>
      </Collapse>
    </div>
  );
};
