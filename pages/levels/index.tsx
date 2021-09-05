import React from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import {Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface ComponentProps {

}

const Levels: React.FC<ComponentProps> = () => {
    return         <MainLayout>
        <Grid>
            <Paper>
                <Typography>Английский</Typography>

            </Paper>
        </Grid>
    </MainLayout>;
};

export default Levels