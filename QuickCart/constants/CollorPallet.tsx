export const COLORS = {
    gray: '#808080',       // Standard gray
    lightGray: '#D3D3D3',  // Light gray
    darkGray: '#A9A9A9',   // Dark gray
    dimGray: '#696969',    // Dim gray
    slateGray: '#708090',  // Slate gray
    charcoal: '#36454F', // Charcoal
    orange: '#d35400',
    primary:'#18C0C1',
    white:'#FFFFFF',
    blue:'#3498db',
    black:'#000000'

}as const;

export type ColorType = keyof typeof COLORS;
