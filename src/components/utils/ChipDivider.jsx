import { Typography ,Divider , Chip } from "@mui/material";

const ChipDivider = ({children}) => {
    return ( 
        <>
            <Divider className='mt-5'>
                <Chip
                    label={<Typography variant='h4'> {children}</Typography>} />
            </Divider>
        </>
     );
}
 
export default ChipDivider;