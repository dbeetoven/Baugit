import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance' },
      {
        name: 'notifications',
        label: 'Notifications',
        items: [
          { name: 'email', label: 'Email' },
          {
            name: 'desktop',
            label: 'Desktop',
            items: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' },
            ],
          },
          { name: 'sms', label: 'SMS' },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem key={`${sidebarItem.name}${index}`} {...sidebarItem} />
        ))}
      </List>
    </div>
  );
};

function SidebarItem({ label, path, items, depthStep = 10, depth = 0, ...rest }) {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText
          onClick={event => (window.location.href = path)}
          style={{ paddingLeft: depth * depthStep }}
        >
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map(subItem => (
            <SidebarItem key={subItem.name} depth={depth + 1} depthStep={depthStep} {...subItem} />
          ))}
        </List>
      ) : null}
    </>
  );
}
export default Sidebar;
