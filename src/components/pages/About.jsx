
import { Avatar, Typography, Hidden, Chip, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ChipDivider from '../utils/ChipDivider';
import hesam from "../../assests/photo_2022-05-06_19-48-41.jpg"

import { skils } from '../../constant';

const About = () => {


    return (
        <>
                <ChipDivider>abot me</ChipDivider>
                <Grid container >
                    <Grid xs={0} sm={4} md={6} lg={6} xl={6} >
                        <Hidden smDown>
                            <Avatar src={hesam} variant="rounded" className="w-[150px] h-[150px] relative m-auto" >HM</Avatar>
                        </Hidden>
                    </Grid>
                    <Grid xs={12} sm={8} md={6} lg={6} xl={6}
                        className="my-4">
                        <Typography variant='h6' className='text-gray-500'>  نام و نام خانوادگی : حسام الدین موحد</Typography>
                        <Typography variant='h6' className='text-gray-500'>  سن : ۲۴</Typography>
                        <Typography variant='h6' className='text-gray-500'> محل سکونت : تهران \ اهواز</Typography>
                        <Typography variant='h6' className='text-gray-500'>   hesammovaahed@gmail.com  : ایمیل </Typography>
                    </Grid>
                </Grid>

            <ChipDivider>skils</ChipDivider>
            <Box className='mt-5'>

                {skils.map(item => (<Chip label={item} color="primary" className='m-1' />))}
            </Box>
        </>);
}

export default About;