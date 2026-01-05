export interface Role {
    name: string; 
    color: 'red' | 'yellow' | 'purple' | 'blue' | 'orange';
    icon: string;
}

export const ROLES: Role[] = [
    {name: 'Fullstack', color: 'yellow', icon: 'layer-group'},
    {name: 'Frontend', color: 'blue', icon: 'palette'},
    {name: 'Backend', color: 'red', icon: 'server'},
    {name: 'Cybersecurity', color: 'orange', icon: 'shield-halved'},
    {name: 'DevOps', color: 'purple', icon: 'gears'}
];